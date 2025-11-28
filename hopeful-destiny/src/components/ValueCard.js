import React from 'react';
import { Sparkles } from 'lucide-react';

const ValueCard = ({
  title,
  description,
  Icon,
  color,
  stat,
  statLabel,
  index,
  isActive,
  onHover,
  onLeave
}) => {
  const colorClasses = {
    yellow: {
      gradient: 'from-yellow-500 to-yellow-600',
      light: 'bg-yellow-400',
      border: 'border-yellow-400',
      text: 'text-yellow-600',
      hover: 'hover:border-yellow-300',
      bg: 'bg-yellow-50'
    },
    orange: {
      gradient: 'from-orange-500 to-orange-600',
      light: 'bg-orange-400',
      border: 'border-orange-400',
      text: 'text-orange-600',
      hover: 'hover:border-orange-300',
      bg: 'bg-orange-50'
    },
    amber: {
      gradient: 'from-amber-500 to-amber-600',
      light: 'bg-amber-400',
      border: 'border-amber-400',
      text: 'text-amber-600',
      hover: 'hover:border-amber-300',
      bg: 'bg-amber-50'
    }
  };

  const colors = colorClasses[color] || colorClasses.yellow;

  return (
    <div
      style={{
        animationDelay: `${index * 150}ms`
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className={`group cursor-pointer bg-gradient-to-br ${colors.gradient} p-8 rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border-2 ${colors.border} ${colors.hover} relative h-full`}>
        {/* Shine effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

        {/* Animated corner accent */}
        <div className={`absolute top-0 right-0 w-32 h-32 ${colors.light} rounded-bl-full opacity-10 transform translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500`}></div>

        <div className="relative z-10">
          {/* Icon Container with pulse animation */}
          <div className="relative w-20 h-20 mb-6 mx-auto">
            <div className={`absolute inset-0 ${colors.light} rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity animate-pulse`}></div>
            <div className="relative w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 border-2 border-white/30">
              <Icon className="w-10 h-10 text-white drop-shadow-lg" />
            </div>

            {/* Sparkle on hover */}
            {isActive && (
              <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-300 animate-pulse" />
            )}
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold mb-4 text-white group-hover:scale-105 transition-transform text-center">
            {title}
          </h3>

          {/* Description */}
          <p className="text-white/90 leading-relaxed mb-6 text-center group-hover:text-white transition-colors">
            {description}
          </p>

          {/* Stats */}
          <div className="text-center pt-4 border-t border-white/20">
            <div className="text-3xl font-bold text-white mb-1 group-hover:scale-110 transition-transform inline-block">
              {stat}
            </div>
            <div className="text-sm text-white/70 font-medium">
              {statLabel}
            </div>
          </div>
        </div>

        {/* Decorative bottom element */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-white/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      </div>
    </div>
  );
};

export default ValueCard;
