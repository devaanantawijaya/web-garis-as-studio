import React from 'react';
import Image from 'next/image';

interface GarisAsLogoProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    showText?: boolean;
    inverted?: boolean;
    isLightHeader?: boolean;
}

export const GarisAsLogo: React.FC<GarisAsLogoProps> = ({
    className = '',
    size = 'md',
    showText = true,
    inverted = false,
    isLightHeader = false,
}) => {
    const iconDimensions = {
        sm: 'w-8 h-8',
        md: 'w-10 h-10',
        lg: 'w-12 h-12',
        xl: 'w-16 h-16',
    }[size];

    const iconSize = {
        sm: 32,
        md: 40,
        lg: 48,
        xl: 64,
    }[size];

    const titleSize = {
        sm: 'text-xs tracking-[0.2em]',
        md: 'text-sm sm:text-base tracking-[0.22em]',
        lg: 'text-lg sm:text-xl tracking-[0.25em]',
        xl: 'text-2xl tracking-[0.25em]',
    }[size];

    const subtitleSize = {
        sm: 'text-[7.5px] tracking-[0.12em]',
        md: 'text-[8.5px] sm:text-[9px] tracking-[0.14em]',
        lg: 'text-[10px] tracking-[0.16em]',
        xl: 'text-xs tracking-[0.18em]',
    }[size];

    return (
        <div className={`flex items-center gap-3 group ${className}`}>
            {/* Logo */}
            <div
                className={`
          relative ${iconDimensions}
          shrink-0
          rounded-xs
          overflow-hidden
          shadow-xs
          transition-transform
          duration-300
          group-hover:scale-105
          bg-[#253457]
          flex items-center justify-center
          border border-white/15
        `}
            >
                <Image
                    src="/logo garis as studio.png"
                    alt="Garis AS Studio Logo"
                    width={iconSize}
                    height={iconSize}
                    priority
                    className="w-full h-full object-cover rounded-xs"
                />
            </div>

            {/* Text */}
            {showText && (
                <div className="flex flex-col">
                    <span
                        className={`
              font-extrabold
              uppercase
              leading-tight
              font-display
              transition-colors
              whitespace-nowrap
              ${titleSize}
              ${inverted
                                ? 'text-white'
                                : isLightHeader
                                    ? 'text-neutral-950'
                                    : 'text-inherit'
                            }
            `}
                    >
                        GARIS AS STUDIO
                    </span>

                    <span
                        className={`
              font-medium
              tracking-[0.14em]
              transition-colors
              whitespace-nowrap
              ${subtitleSize}
              ${inverted
                                ? 'text-neutral-400'
                                : isLightHeader
                                    ? 'text-neutral-500'
                                    : 'text-neutral-300'
                            }
            `}
                    >
                        Arsitektural | Interior | Konstruksi
                    </span>
                </div>
            )}
        </div>
    );
};