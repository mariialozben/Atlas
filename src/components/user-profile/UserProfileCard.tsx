import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'
import type { UserProfileProps } from './types'

export default function UserProfileCard({ name, email, avatarUrl, initials }: UserProfileProps) {
  const fallback = initials ?? name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button data-el="user-profile-trigger" className="rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--blue-500)]">
          <Avatar>
            {avatarUrl && <AvatarImage src={avatarUrl} alt={name} />}
            <AvatarFallback style={{ backgroundColor: 'var(--bg-elevated)', color: 'var(--text-primary)' }}>
              {fallback}
            </AvatarFallback>
          </Avatar>
        </button>
      </PopoverTrigger>
      <PopoverContent
        data-el="user-profile-card"
        className="w-56 p-4"
        style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border)' }}
      >
        <div className="flex items-center gap-3 mb-4">
          <Avatar>
            {avatarUrl && <AvatarImage src={avatarUrl} alt={name} />}
            <AvatarFallback style={{ backgroundColor: 'var(--bg-elevated)', color: 'var(--text-primary)' }}>
              {fallback}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{name}</p>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{email}</p>
          </div>
        </div>
        <Button variant="outline" size="sm" className="w-full gap-2">
          <LogOut size={14} /> Sign Out
        </Button>
      </PopoverContent>
    </Popover>
  )
}
