'use client';
import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import Image from "next/image";
import Link from "next/link";
import { LiquidGlassCard } from './liquid-glass-card';

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
					width={200}
					height={200}
					className={cn(
						"h-10 w-auto transition-all duration-300",
						{
							"brightness-0 invert": isHeroState && !open
						}
					)}
					priority
				/>
			</Link>
			<div className="hidden items-center gap-6 md:flex relative z-40">
				{links.map((link, i) => (
					link.label === 'Contact' ? (
						<Button key={i} asChild>
							<Link href={link.href}>
								{link.label}
							</Link>
						</Button>
					) : (
						<Link
							key={i}
							className={cn(
								buttonVariants({ variant: 'ghost' }),
								"text-base font-medium transition-colors duration-300",
								{
									"text-white hover:text-white hover:bg-white/10": isHeroState && !open
								}
							)}
							href={link.href}
						>
							{link.label}
						</Link>
					)
				))}
			</div>
			<Button size="icon" variant="outline" onClick={() => setOpen(!open)} className="md:hidden relative z-40">
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

	// Logic to determine if we are in the "Hero" state (transparent, white text)
	const isHeroState = !scrolled && !open;

	return (
		<header
			className={cn(
				'fixed top-0 z-50 mx-auto w-full left-0 right-0 transition-all duration-500 ease-in-out',
                {
                    'bg-background/95 h-full': open,
					'pointer-events-none': !open && !scrolled // Let clicks pass through on hero
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
					// Only apply glass card styles when scrolled
                    className={cn(
						"mx-auto transition-all duration-500 ease-in-out flex flex-col justify-center",
						{
							"rounded-full bg-white/10": scrolled && !open,
							"rounded-none bg-transparent shadow-none": !scrolled && !open,
							"w-full h-16 max-w-7xl px-6": !scrolled && !open,
							"w-full h-14 max-w-5xl px-8": scrolled && !open,
							// Open state overrides
							"bg-background/95 h-auto rounded-none": open
						}
					)}
                    borderRadius={scrolled && !open ? "9999px" : "0px"}
                    blurIntensity={scrolled && !open ? "xl" : "sm"}
                    shadowIntensity={scrolled && !open ? "md" : "none"}
                    glowIntensity={scrolled && !open ? "sm" : "none"}
                >
                    <NavContent 
						className={cn(
							"transition-all duration-500",
							{
								"h-14": scrolled && !open,
								"h-16": !scrolled && !open
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
					'fixed top-14 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-y md:hidden transition-all duration-300 bg-background/95',
					open ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none',
				)}
                style={{ top: scrolled ? '4.5rem' : '4rem' }}
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
								<Button key={link.label} asChild className="text-xl font-light w-full max-w-[200px]" size="lg">
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
									className="text-3xl font-light text-foreground hover:text-muted-foreground transition-colors"
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
