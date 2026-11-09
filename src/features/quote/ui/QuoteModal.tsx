import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "cn";
import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  variant?: "default" | "secondary";
  className?: string;
  icon?: LucideIcon;
}

export default function QuoteModal({
  title,
  variant = "default",
  className,
  icon: Icon,
}: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={variant} size="lg" className={cn(className)}>
          <span>{title}</span>
          {Icon && <Icon className="size-4" />}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
