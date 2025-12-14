'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/hooks/use-scroll';
import Image from "next/image";
import Link from "next/link";
import { LiquidGlassCard } from '@/components/ui/liquid-glass-card';

interface NavLink {
	label: string;
	href: string;
}

interface NavContentProps {
	className?: string;
	isHeroState: boolean;
	open: boolean;
	setOpen: (open: boolean) => void;
	links: NavLink[];
}

function NavContent({
	className,
	isHeroState,
	open,
	setOpen,
	links
}: NavContentProps) {
	return (
		<nav
			className={cn(
				'mx-auto flex w-full items-center justify-between transition-all duration-300 ease-out',
                className
			)}
		>
			<Link href="/" className="shrink-0 relative z-40" onClick={() => setOpen(false)}>
				<Image
					src="/awa_contruction_logo.svg"
					alt="Awa Construction Logo"
					width={500}
					height={500}
					className={cn(
						"h-10 w-auto transition-all duration-300",
						{
							"brightness-0 invert": (isHeroState && !open) || open
						}
					)}
					priority
				/>
			</Link>
			<div className="hidden items-center gap-6 md:flex relative z-40">
				{links.map((link, i) => (
					link.label === 'Contact' ? (
						<Link
							key={i}
							href={link.href}
							className="group relative cursor-pointer w-32 h-10 border bg-white rounded-full overflow-hidden text-black font-unbounded flex items-center justify-center"
						>
							<span className="translate-y-0 group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300 inline-block">
								{link.label}
							</span>
							<div className="flex gap-2 text-white bg-[#02D2F6] z-10 items-center absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full">
								<span>{link.label}</span>
							</div>
						</Link>
					) : (
						<Link
							key={i}
							className={cn(
								"text-base font-unbounded relative py-2",
								"after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100",
								{
									"text-white": isHeroState && !open,
									"text-foreground hover:text-foreground/80": !isHeroState || open
								}
							)}
							href={link.href}
						>
							{link.label}
						</Link>
					)
				))}
			</div>
			<Button 
				size="icon" 
				variant="ghost" 
				onClick={() => setOpen(!open)} 
				className={cn(
					"md:hidden relative z-40 hover:bg-transparent transition-colors duration-300",
					{
						"text-white hover:text-white/80": isHeroState || open,
						"text-black hover:text-black/80": !isHeroState && !open
					}
				)}
			>
				<MenuToggleIcon open={open} className="size-5" duration={300} />
			</Button>
		</nav>
	);
}

export function Header() {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(10);

	const links = [
		{ label: 'Home', href: '/' },
		{ label: 'Company', href: '#' },
		{ label: 'Project', href: '#' },
		{ label: 'Service', href: '#' },
		{ label: 'Contact', href: '#' },
	];

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	const isHeroState = !scrolled && !open;

	return (
		<header
			className={cn(
				'fixed top-0 z-50 mx-auto w-full left-0 right-0 transition-all duration-500 ease-in-out',
                {
                    'bg-black/60 backdrop-blur-lg h-full': open,
					'pointer-events-none': !open && !scrolled
                }
			)}
		>
            <div 
				className={cn(
					"mx-auto transition-all duration-500 ease-in-out pointer-events-auto",
					{
						"max-w-5xl pt-4": scrolled && !open,
						"w-full": !scrolled || open
					}
				)}
			>
                <LiquidGlassCard
                    draggable={false}
                    className={cn(
						"mx-auto transition-all duration-500 ease-in-out flex flex-col justify-center",
						{
							"rounded-full bg-white/10": scrolled && !open,
							"rounded-none bg-transparent shadow-none": !scrolled && !open,
							"w-full h-16 max-w-7xl px-6": !scrolled && !open,
							"w-full h-14 max-w-5xl px-8": scrolled && !open,
							"bg-transparent h-auto rounded-none": open
						}
					)}
                    borderRadius={scrolled && !open ? "9999px" : "0px"}
                    blurIntensity={scrolled && !open ? "md" : "none"}
                    shadowIntensity={scrolled && !open ? "md" : "none"}
                    glowIntensity={scrolled && !open ? "md" : "none"}
                >
                    <NavContent 
						className={cn(
							"transition-all duration-500",
							{
								"h-14": scrolled && !open,
								"h-16": !scrolled && !open,
								"h-20": open
							}
						)}
						isHeroState={isHeroState} 
						open={open} 
						setOpen={setOpen} 
						links={links}
					/>
                </LiquidGlassCard>
            </div>

			<div
				className={cn(
					'fixed top-14 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-y md:hidden transition-all duration-300 bg-transparent',
					open ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none',
				)}
                style={{ top: open ? '5rem' : (scrolled ? '4.5rem' : '4rem') }}
			>
				<div
					className={cn(
						'flex h-full w-full flex-col justify-center gap-y-8 p-8 transition-transform duration-300',
                        open ? 'translate-y-0' : '-translate-y-4'
					)}
				>
					<div className="flex flex-col items-center gap-y-6">
						{links.map((link, index) => (
							link.label === 'Contact' ? (
								<Button key={link.label} asChild className="text-xl font-unbounded w-full max-w-[200px] bg-white text-black hover:bg-white/90" size="lg">
									<Link
										href={link.href}
										onClick={() => setOpen(false)}
										style={{ transitionDelay: `${index * 50}ms` }}
									>
										{link.label}
									</Link>
								</Button>
							) : (
								<Link
									key={link.label}
									href={link.href}
									className="text-3xl font-light text-white hover:text-white/70 transition-colors"
									onClick={() => setOpen(false)}
									style={{ transitionDelay: `${index * 50}ms` }}
								>
									{link.label}
								</Link>
							)
						))}
					</div>
				</div>
			</div>
		</header>
	);
}
