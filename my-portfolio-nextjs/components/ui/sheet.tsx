"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const Sheet = DialogPrimitive.Root;
const SheetTrigger = DialogPrimitive.Trigger;
const SheetClose = DialogPrimitive.Close;
const SheetTitle = DialogPrimitive.Title;

const SheetPortal = DialogPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-[#0B0D10]/60 backdrop-blur-sm", className)}
    {...props}
  />
));
SheetOverlay.displayName = DialogPrimitive.Overlay.displayName;

const SheetContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "mobile-nav-panel fixed inset-x-4 top-[4.75rem] z-50 rounded-2xl border border-[var(--portfolio-border)] p-2 shadow-[var(--portfolio-shadow-md)] backdrop-blur-xl",
        className
      )}
      {...props}
    >
      <DialogPrimitive.Close className="absolute right-3 top-3 rounded-full p-2 text-[var(--portfolio-muted)] hover:bg-[rgba(255,219,187,0.08)] hover:text-[var(--portfolio-text)]">
        <X size={18} />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
      <div className="pt-9">{children}</div>
    </DialogPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = DialogPrimitive.Content.displayName;

export { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger };
