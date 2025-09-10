import * as React from "react";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  className?: string;
  showPercentage?: boolean;
}

export const ProgressBar = ({ value, className, showPercentage = false }: ProgressBarProps) => {
  return (
    <div className={cn("w-full space-y-2", className)}>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary to-blockchain transition-all duration-500 ease-out"
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        />
      </div>
      {showPercentage && (
        <div className="text-right text-sm text-muted-foreground">
          {Math.round(value)}%
        </div>
      )}
    </div>
  );
};