"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, MessageSquare, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50">Get in Touch</h1>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
          Have questions about a property or want to list yours? Our team is here to help you every step of the way.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-12">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 italic">Contact Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-zinc-900 dark:text-zinc-50">Email Us</p>
                  <p className="text-sm text-zinc-500">contact@luxeestate.com</p>
                  <p className="text-sm text-zinc-500">support@luxeestate.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-zinc-900 dark:text-zinc-50">Call Us</p>
                  <p className="text-sm text-zinc-500">+1 (555) 123-4567</p>
                  <p className="text-sm text-zinc-500">+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-zinc-900 dark:text-zinc-50">Our Office</p>
                  <p className="text-sm text-zinc-500">123 Luxury Lane</p>
                  <p className="text-sm text-zinc-500">Beverly Hills, CA 90210</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-zinc-900 dark:text-zinc-50">Live Chat</p>
                  <p className="text-sm text-zinc-500">Available 24/7</p>
                  <p className="text-sm text-zinc-500">on our website</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl border border-zinc-200 dark:border-zinc-800">
            {/* Using an Unsplash image to represent a map */}
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" 
              alt="Map Location" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-600/10 backdrop-blur-[2px] flex items-center justify-center">
              <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-sm">LuxeEstate HQ</p>
                  <p className="text-xs text-zinc-500">Beverly Hills, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <Card className="border-zinc-200 dark:border-zinc-800 p-8 shadow-xl">
          <CardContent className="p-0 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Send us a Message</h2>
              <p className="text-sm text-zinc-500">Fill out the form below and we'll get back to you shortly.</p>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <Input placeholder="John" className="h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <Input placeholder="Doe" className="h-12" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <Input type="email" placeholder="john@example.com" className="h-12" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input placeholder="Inquiry about property" className="h-12" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea 
                  placeholder="How can we help you?" 
                  className="min-h-[150px] resize-none" 
                />
              </div>

              <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
