import type { Command } from "./types";

export const COMMANDS: Command[] = [
    {
        name: "new",
        description: "Start a new conversation",
        value: "/new",
        action: (ctx) => {
            ctx.toast.show({
                message: "Starting a new conversation...",
            });
        },
    },
    {
        name: "usage",
        description: "View your account usage and limits",
        value: "/usage",
        action: (ctx) => {
            ctx.toast.show({
                message: "Opening account usage...",
            });
        },
    },
    {
        name: "upgrade",
        description: "Upgrade your current plan",
        value: "/upgrade",
        action: (ctx) => {
            ctx.toast.show({
                message: "Opening upgrade page...",
            });
        },
    },
    {
        name: "logout",
        description: "Sign out of your account",
        value: "/logout",
        action: (ctx) => {
            ctx.toast.show({
                message: "Signing out...",
            });
        },
    },
    {
        name: "login",
        description: "Sign in to your account",
        value: "/login",
        action: (ctx) => {
            ctx.toast.show({
                message: "Opening login...",
            });
        },
    },
    {
        name: "theme",
        description: "Change the application theme",
        value: "/theme",
        action: (ctx) => {
            ctx.toast.show({
                message: "Opening theme selector...",
            });
        },
    },
    {
        name: "sessions",
        description: "Manage active chat sessions",
        value: "/sessions",
        action: (ctx) => {
            ctx.toast.show({
                message: "Opening sessions...",
            });
        },
    },
    {
        name: "models",
        description: "Switch between available AI models",
        value: "/models",
        action: (ctx) => {
            ctx.dialog.open({
                title: "Select Model",
                children: <text>Model selection coming soon</text>
            });
        },
    },
    {
        name: "agents",
        description: "Browse and manage AI agents",
        value: "/agents",
        action: (ctx) => {
            ctx.dialog.open({
                title: "Select Agent",
                children: <text>Agent selection coming soon</text>
            });
        },
    },
    {
        name: "exit",
        description: "Quit the application",
        value: "/exit",
        action: (ctx) => {
            ctx.toast.show({
                message: "Goodbye!",
            });

            setTimeout(() => {
                ctx.exit();
            }, 300);
        },
    },
];