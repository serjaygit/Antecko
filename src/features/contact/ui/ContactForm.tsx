"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUpRight } from "lucide-react";

const OPTIONS = ["Landing", "Business", "Custom", "Support"] as const;

export default function ContactForm() {
  return (
    <form className="border border-border rounded-md bg-card p-6 space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field>
          <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
          <Input id="fullName" type="text" placeholder="John Doe" />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email Address</FieldLabel>
          <Input id="email" type="email" placeholder="johndoe@example.com" />
        </Field>
      </div>

      <div className="space-y-2">
        <p id="option-label" className="text-sm font-medium">
          Which option interests you?
        </p>
        <div
          role="radiogroup"
          aria-labelledby="option-label"
          className="grid grid-cols-1 gap-2 sm:grid-cols-4"
        >
          {OPTIONS.map((item) => {
            return (
              <Button
                key={item}
                type="button"
                role="radio"
                className="py-4"
                // variant={selected ? "default" : "outline"}
              >
                {item}
              </Button>
            );
          })}
        </div>
      </div>

      <Field>
        <FieldLabel htmlFor="description">Project Details</FieldLabel>
        <Textarea
          id="description"
          placeholder="Tell us about your goals, timeline, and any links to reference..."
          className="h-40 resize-none"
        />
      </Field>

      <Button
        type="submit"
        variant="secondary"
        size="lg"
        className="w-full py-5"
      >
        Send Message
        <ArrowUpRight />
      </Button>
    </form>
  );
}
