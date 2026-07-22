import type { Command } from "./types";

export const COMMANDS: Command[] = [
    {
        name: "new",
        description: "Start a new conversation",
        value: "/new",
    },
    {
        name: "usage",
        description: "View your account usage and limits",
        value: "/usage",
    },
    {
        name: "upgrade",
        description: "Upgrade your current plan",
        value: "/upgrade",
    },
    {
        name: "logout",
        description: "Sign out of your account",
        value: "/logout",
    },
    {
        name: "login",
        description: "Sign in to your account",
        value: "/login",
    },
    {
        name: "theme",
        description: "Change the application theme",
        value: "/theme",
    },
    {
        name: "sessions",
        description: "Manage active chat sessions",
        value: "/sessions",
    },
    {
        name: "models",
        description: "Switch between available AI models",
        value: "/models",
    },
    {
        name: "agents",
        description: "Browse and manage AI agents",
        value: "/agents",
    },
    {
        name: "exit",
        description: "Quit the application",
        value: "/exit",
        action: (ctx) => {
            ctx.exit();
        },
    },
];