'use client'

import React from 'react'

import Link from 'next/link';

import { ChevronsUpDown, Coins, LogIn, LogOut, User, Wallet } from 'lucide-react';

import { useLogin } from '@/hooks';

import {
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuGroup,
    DropdownMenuItem,
    useSidebar,
    Skeleton,
} from '@/components/ui';

import { truncateAddress } from '@/lib/wallet';

const AuthButton: React.FC = () => {

    const { user, ready, login, logout, fundWallet } = useLogin();

    const { isMobile } = useSidebar();

    if (!ready) return <Skeleton className="w-full h-8" />;

    if (!user || !user.wallet) return (
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton 
                    variant="brandOutline"
                    onClick={() => login()}
                    className="w-full justify-center gap-0 border-[#74ff71] text-[#74ff71]"
                >
                    <LogIn className="h-4 w-4" />
                    <span className="ml-2">
                        Log in
                    </span>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    )

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                            variant="brandOutline"
                        >
                            <Wallet className="size-8" />
                            <span className="ml-2">
                                {truncateAddress(user.wallet.address)}
                            </span>
                        <ChevronsUpDown className="ml-auto size-4" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                        side={isMobile ? "bottom" : "right"}
                        align="end"
                        sideOffset={4}
                    >
                        <DropdownMenuLabel className="p-0 font-normal">
                            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                <Wallet className="size-4" />
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold">{truncateAddress(user.wallet.address)}</span>
                                </div>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem onClick={() => fundWallet(user.wallet!.address, { amount: "0.01" })}>
                                <Coins className="size-4" />
                                Fund Wallet
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/account">
                                    <User className="size-4" />
                                    Account
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => logout()}>
                            <LogOut />
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}

export default AuthButton;