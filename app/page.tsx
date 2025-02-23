'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useBreakTimer } from '@/hooks/useBreakTimer'
import BreakEnforcer from '@/components/BreakEnforcer'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { ThemeProvider } from '@/components/ThemeProvider'
import { ThemeToggle } from '@/components/ThemeToggle'
import {
    Collapsible,
    CollapsibleTrigger,
    CollapsibleContent,
} from '@/components/ui/collapsible'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ChevronDown, ChevronUp, X, Plus, Trash2 } from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox'

import {
    RiSettingsLine,
    RiTimerFill,
    RiListCheck3,
    RiSaveLine,
} from '@remixicon/react'
import { Badge } from '@/components/ui/badge'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface Task {
    id: string
    text: string
    createdAt: number
    completed: boolean
    priority?: 'high' | 'medium' | 'low'
}

interface TimerConfig {
    workDuration: number
    shortBreakDuration: number
    longBreakDuration: number
    sessionsBeforeLongBreak: number
    totalCycles: number
}

// Format seconds to human-readable time
const formatSecondsToTime = (seconds: number): string => {
    if (seconds === 0) return '0s'
    const hours = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    const parts = []
    if (hours > 0) parts.push(`${hours}h`)
    if (mins > 0) parts.push(`${mins}m`)
    if (secs > 0) parts.push(`${secs}s`)
    return parts.length > 0 ? parts.join(' ') : '0s'
}

const parseTimeExpression = (input: string, currentValue: number): number => {
    try {
        const cleaned = input.replace(/\s+/g, '').toLowerCase()
        if (!cleaned) return currentValue

        // Handle relative operations
        if (cleaned.startsWith('+') || cleaned.startsWith('-')) {
            const absoluteValue = parseTimeExpression(cleaned.slice(1), 0)
            return (
                currentValue +
                (cleaned.startsWith('-') ? -absoluteValue : absoluteValue)
            )
        }

        // Split into terms considering both + and -
        const terms = cleaned.split(/(?=[+-])/g)

        return terms.reduce((total, term) => {
            const sign = term.startsWith('-') ? -1 : 1
            const termWithoutSign = term.replace(/^[+-]/, '')
            const matches = Array.from(
                termWithoutSign.matchAll(/(\d+)(h|m|s)?/g)
            )
            if (matches.length === 0) throw new Error('Invalid format')

            const termTotal = matches.reduce((sum, match) => {
                const value = parseInt(match[1], 10)
                const unit = (match[2] || 's').toLowerCase()
                switch (unit) {
                    case 'h':
                        return sum + value * 3600
                    case 'm':
                        return sum + value * 60
                    case 's':
                        return sum + value
                    default:
                        throw new Error('Invalid unit')
                }
            }, 0)

            return total + termTotal * sign
        }, 0)
    } catch {
        return NaN
    }
}

export default function BreakScheduler() {
    const [isConfigOpen, setIsConfigOpen] = useState(false)

    // Task states initialization
    const [isMounted, setIsMounted] = useState(false)
    const [taskInput, setTaskInput] = useState('')
    const [tasks, setTasks] = useState<Task[]>([])
    const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null)

    // Initialize from localStorage after mount
    useEffect(() => {
        setIsMounted(true)
        setTaskInput(localStorage.getItem('breakTimerTask') || '')
        const savedTasks = localStorage.getItem('breakTimerTasks')
        setTasks(savedTasks ? JSON.parse(savedTasks) : [])

        // Load selectedTaskId from localStorage
        const savedSelectedTask = localStorage.getItem('selectedTaskId')
        setSelectedTaskId(savedSelectedTask || null)
    }, [])

    useEffect(() => {
        if (isMounted) {
            localStorage.setItem('selectedTaskId', selectedTaskId || '')
        }
    }, [selectedTaskId, isMounted])

    // Persist task input
    useEffect(() => {
        if (isMounted) {
            localStorage.setItem('breakTimerTask', taskInput)
        }
    }, [taskInput, isMounted])

    // Persist task list
    useEffect(() => {
        if (isMounted) {
            localStorage.setItem('breakTimerTasks', JSON.stringify(tasks))
        }
    }, [tasks, isMounted])

    const handleAddTask = () => {
        if (taskInput.trim()) {
            setTasks((prev) => [
                ...prev,
                {
                    id: Date.now().toString(),
                    text: taskInput.trim(),
                    createdAt: Date.now(),
                    completed: false,
                    priority: undefined,
                },
            ])
            setTaskInput('')
        }
    }

    const handlePriorityChange = (
        taskId: string,
        priority: 'high' | 'medium' | 'low' | undefined
    ) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, priority } : task
            )
        )
    }

    const priorityOrder = { high: 1, medium: 2, low: 3, none: 4 }

    const priorityConfig = {
        high: {
            label: 'High',
            class: 'bg-red-200 dark:bg-red-400/30 dark:text-red-200 dark:border-red-400/40 text-red-800 hover:bg-red-200 border-red-300/60',
        },
        medium: {
            label: 'Medium',
            class: 'bg-yellow-200 dark:bg-yellow-400/30 dark:text-yellow-200 dark:border-yellow-400/40 text-yellow-800 hover:bg-yellow-200 border-yellow-300/60',
        },
        low: {
            label: 'Low',
            class: 'bg-blue-200 dark:bg-blue-400/30 dark:text-blue-200 dark:border-blue-400/40 text-blue-800 hover:bg-blue-200 border-blue-300/60',
        },
        none: {
            label: 'None',
            class: 'bg-gray-200 dark:bg-gray-400/30 dark:text-gray-200 dark:border-gray-400/40 text-gray-800 hover:bg-gray-200 border-gray-300/60',
        },
    } as const

    const PriorityBadge = ({
        priority,
    }: {
        priority?: 'high' | 'medium' | 'low'
    }) => {
        const currentPriority = priority || 'none'
        return (
            <Badge
                variant="outline"
                className={`rounded-sm px-2 py-1 text-xs font-medium transition-colors ${
                    priorityConfig[currentPriority].class
                } ${!priority ? 'opacity-70' : ''}`}
            >
                {priorityConfig[currentPriority].label}
            </Badge>
        )
    }

    const handleClearInput = () => {
        setTaskInput('')
        setSelectedTaskId(null)
    }

    const handleTaskClick = (text: string, taskId: string) => {
        setTaskInput((prevInput) => (selectedTaskId === taskId ? '' : text))
        setSelectedTaskId((prevId) => (prevId === taskId ? null : taskId))
    }

    const handleToggleTaskCompletion = (taskId: string) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId
                    ? { ...task, completed: !task.completed }
                    : task
            )
        )
    }

    const [isTasksOpen, setIsTasksOpen] = useState(false)

    const handleDeleteTask = (taskId: string) => {
        setTasks((prev) => prev.filter((task) => task.id !== taskId))
        if (selectedTaskId === taskId) {
            setSelectedTaskId(null)
        }
    }

    const handleDeleteAllTasks = () => {
        setTasks([])
        setSelectedTaskId(null)
    }

    const [config, setConfig] = useState<TimerConfig>(() => {
        if (typeof window === 'undefined') {
            return {
                workDuration: 24 * 60,
                shortBreakDuration: 5 * 60,
                longBreakDuration: 15 * 60,
                sessionsBeforeLongBreak: 4,
                totalCycles: 0,
            }
        }

        const savedConfig = localStorage.getItem('breakTimerConfig')
        if (savedConfig) {
            return JSON.parse(savedConfig)
        } else {
            const defaultConfig = {
                workDuration: 24 * 60,
                shortBreakDuration: 5 * 60,
                longBreakDuration: 15 * 60,
                sessionsBeforeLongBreak: 4,
                totalCycles: 0,
            }
            localStorage.setItem(
                'breakTimerConfig',
                JSON.stringify(defaultConfig)
            )
            return defaultConfig
        }
    })

    const [rawInputs, setRawInputs] = useState(() => {
        if (typeof window === 'undefined') {
            return {
                workDuration: '24m',
                shortBreakDuration: '5m',
                longBreakDuration: '15m',
            }
        }

        const savedConfig = localStorage.getItem('breakTimerConfig')
        if (savedConfig) {
            const parsedConfig = JSON.parse(savedConfig)
            return {
                workDuration: formatSecondsToTime(parsedConfig.workDuration),
                shortBreakDuration: formatSecondsToTime(
                    parsedConfig.shortBreakDuration
                ),
                longBreakDuration: formatSecondsToTime(
                    parsedConfig.longBreakDuration
                ),
            }
        } else {
            return {
                workDuration: '24m',
                shortBreakDuration: '5m',
                longBreakDuration: '15m',
            }
        }
    })

    // Update localStorage whenever config changes
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('breakTimerConfig', JSON.stringify(config))
        }
    }, [config])

    const handleKeyPress =
        (field: keyof typeof rawInputs) =>
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
                const parsed = parseTimeExpression(
                    rawInputs[field],
                    config[field]
                )

                if (!isNaN(parsed) && parsed >= 0) {
                    setConfig((prev: TimerConfig) => ({
                        ...prev,
                        [field]: parsed,
                    }))
                    setRawInputs((prev) => ({
                        ...prev,
                        [field]: formatSecondsToTime(parsed),
                    }))
                } else {
                    setRawInputs((prev) => ({
                        ...prev,
                        [field]: formatSecondsToTime(config[field]),
                    }))
                }
                e.currentTarget.blur()
            }
        }

    const handleRawInputChange =
        (field: keyof typeof rawInputs) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setRawInputs((prev) => ({
                ...prev,
                [field]: e.target.value,
            }))
        }

    const handleConfigChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        const numValue = Number.parseInt(value)
        if (!isNaN(numValue) && numValue >= 0) {
            setConfig((prev) => ({
                ...prev,
                [name]: numValue,
            }))
        }
    }

    const handleTaskInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newText = e.target.value
        setTaskInput(newText)

        if (selectedTaskId) {
            setTasks((prevTasks) =>
                prevTasks.map((task) =>
                    task.id === selectedTaskId
                        ? { ...task, text: newText }
                        : task
                )
            )
        }
    }

    const [enforceBreak, setEnforceBreak] = useState(true)
    const {
        timeLeft,
        isBreak,
        isLongBreak,
        currentSession,
        completedCycles,
        isRunning,
        isBreakEnded,
        start,
        pause,
        reset,
        switchMode,
        resetBreakEnded,
    } = useBreakTimer(config, enforceBreak, setEnforceBreak)

    useEffect(() => {
        let breakType = isBreak
            ? isLongBreak
                ? ' - Long Break'
                : ' - Short Break'
            : taskInput
              ? ` - ${taskInput}`
              : ` - Work Session`
        document.title = isRunning
            ? `${formatTime(timeLeft)}${breakType}`
            : `TimeWise`
    }, [timeLeft, isBreak, isLongBreak, currentSession])

    const formatTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600)
        const minutes = Math.floor((seconds % 3600) / 60)
        const remainingSeconds = seconds % 60

        const parts = []
        if (hours > 0) {
            parts.push(hours.toString().padStart(2, '0'))
            parts.push(minutes.toString().padStart(2, '0'))
        } else {
            parts.push(minutes.toString().padStart(2, '0'))
        }
        parts.push(remainingSeconds.toString().padStart(2, '0'))

        return parts.join(':')
    }

    const skipBreak = () => {
        setEnforceBreak(true)
        switchMode()
    }

    const inputConfig = [
        { id: 'workDuration', label: 'Work Duration', field: 'workDuration' },
        {
            id: 'shortBreakDuration',
            label: 'Short Break',
            field: 'shortBreakDuration',
        },
        {
            id: 'longBreakDuration',
            label: 'Long Break',
            field: 'longBreakDuration',
        },
    ]

    if (!isMounted) {
        return null // or loading skeleton
    }

    const handleReadyClick = () => {
        switchMode()
        start()
        resetBreakEnded()
    }

    return (
        <ThemeProvider defaultTheme="system" storageKey="ui-theme">
            <div className="container mx-auto p-4 sm:px-8 px-4">
                <div className="flex gap-4 mt-8 mb-6 flex-col sm:gap-2 sm:flex-row items-center">
                    <h1 className="text-3xl font-bold sm:mr-auto flex items-center gap-2">
                        <RiTimerFill size={36} /> TimeWise
                    </h1>
                    <div className="flex gap-2">
                        <ThemeToggle />
                        <Dialog
                            open={isConfigOpen}
                            onOpenChange={setIsConfigOpen}
                        >
                            <DialogTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <RiSettingsLine />
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-md">
                                <DialogHeader>
                                    <DialogTitle>Configuration</DialogTitle>
                                </DialogHeader>
                                <div className="grid grid-cols-2 gap-4">
                                    {inputConfig.map(({ id, label, field }) => (
                                        <div key={id}>
                                            <Label htmlFor={id}>{label}</Label>
                                            <Input
                                                id={id}
                                                value={
                                                    rawInputs[
                                                        field as keyof typeof rawInputs
                                                    ]
                                                }
                                                onChange={handleRawInputChange(
                                                    field as keyof typeof rawInputs
                                                )}
                                                onKeyDown={handleKeyPress(
                                                    field as keyof typeof rawInputs
                                                )}
                                                onBlur={() => {
                                                    const currentValue =
                                                        rawInputs[
                                                            field as keyof typeof rawInputs
                                                        ]
                                                    const parsed =
                                                        parseTimeExpression(
                                                            currentValue,
                                                            config[
                                                                field as keyof typeof config
                                                            ]
                                                        )
                                                    if (
                                                        !isNaN(parsed) &&
                                                        parsed >= 0
                                                    ) {
                                                        setConfig((prev) => ({
                                                            ...prev,
                                                            [field]: parsed,
                                                        }))
                                                        setRawInputs(
                                                            (prev) => ({
                                                                ...prev,
                                                                [field]:
                                                                    formatSecondsToTime(
                                                                        parsed
                                                                    ),
                                                            })
                                                        )
                                                    } else {
                                                        setRawInputs(
                                                            (prev) => ({
                                                                ...prev,
                                                                [field]:
                                                                    formatSecondsToTime(
                                                                        config[
                                                                            field as keyof typeof config
                                                                        ]
                                                                    ),
                                                            })
                                                        )
                                                    }
                                                }}
                                                placeholder="e.g., 1m 30s, 150+5s"
                                            />
                                            <div className="text-sm text-muted-foreground mt-1">
                                                {
                                                    config[
                                                        field as keyof typeof config
                                                    ]
                                                }{' '}
                                                seconds
                                            </div>
                                        </div>
                                    ))}
                                    <div>
                                        <Label htmlFor="sessionsBeforeLongBreak">
                                            Sessions before Long Break
                                        </Label>
                                        <Input
                                            id="sessionsBeforeLongBreak"
                                            name="sessionsBeforeLongBreak"
                                            type="number"
                                            min="1"
                                            value={
                                                config.sessionsBeforeLongBreak
                                            }
                                            onChange={handleConfigChange}
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="totalCycles">
                                            Total Cycles (0 for infinite)
                                        </Label>
                                        <Input
                                            id="totalCycles"
                                            name="totalCycles"
                                            type="number"
                                            min="0"
                                            value={config.totalCycles}
                                            onChange={handleConfigChange}
                                        />
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>

                {/* Task Input Section */}
                <div className="mb-3 space-y-2">
                    <div className="flex items-center gap-1 my-2">
                        <Label className="flex gap-1 items-center">
                            <RiListCheck3 size={18} />
                            Session Task
                        </Label>
                        <span className="text-sm text-primary/60">•</span>
                        <span className="text-sm text-primary/60">
                            Press Enter to save
                        </span>
                    </div>
                    <div className="flex gap-2 relative">
                        <Input
                            value={taskInput}
                            onChange={handleTaskInputChange}
                            placeholder="✨ What's your focus for this session?"
                            className="flex-1 pl-4 pr-20 py-5"
                            onKeyDown={(e) =>
                                e.key === 'Enter' && handleAddTask()
                            }
                        />
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2">
                            <Button
                                variant="ghost"
                                onClick={handleClearInput}
                                className="h-7 w-7 p-2 rounded-lg hover:bg-primary/10 text-primary/80 hover:text-primary"
                                title="Clear input"
                            >
                                <X className="h-4 w-4" />
                            </Button>
                            <Button
                                onClick={handleAddTask}
                                className="h-7 w-7 p-2"
                                title="Add task"
                            >
                                <Plus className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Task List */}
                    {tasks.length > 0 && (
                        <Collapsible
                            open={isTasksOpen}
                            onOpenChange={setIsTasksOpen}
                            className="mt-4"
                        >
                            <div className="flex items-center justify-between rounded-lg p-1">
                                <CollapsibleTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-between px-4 py-2 hover:bg-muted/30 rounded-lg transition-colors"
                                    >
                                        <div className="flex items-center gap-2">
                                            <span className="font-medium flex items-center gap-1">
                                                <RiSaveLine size={24} />
                                                Saved Tasks
                                            </span>
                                            <span className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold">
                                                {tasks.length}
                                            </span>
                                        </div>
                                        {isTasksOpen ? (
                                            <ChevronUp className="h-5 w-5 text-primary/80" />
                                        ) : (
                                            <ChevronDown className="h-5 w-5 text-primary/80" />
                                        )}
                                    </Button>
                                </CollapsibleTrigger>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={handleDeleteAllTasks}
                                    className="text-red-600 hover:text-red-700 p-2 mx-1 h-8 w-8"
                                    title="Delete all tasks"
                                >
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>

                            <CollapsibleContent>
                                <ScrollArea className="bg-background shadow-sm">
                                    <div className="p-2 px-8 space-y-1">
                                        {[...tasks]
                                            .sort((a, b) => {
                                                const aPriority =
                                                    a.priority || 'none'
                                                const bPriority =
                                                    b.priority || 'none'
                                                const orderA =
                                                    priorityOrder[
                                                        aPriority as keyof typeof priorityOrder
                                                    ]
                                                const orderB =
                                                    priorityOrder[
                                                        bPriority as keyof typeof priorityOrder
                                                    ]
                                                if (orderA !== orderB) {
                                                    return orderA - orderB
                                                }
                                                return a.createdAt - b.createdAt
                                            })
                                            .map((task) => (
                                                <div
                                                    key={task.id}
                                                    onClick={() =>
                                                        handleTaskClick(
                                                            task.text,
                                                            task.id
                                                        )
                                                    }
                                                    className={`flex items-center justify-between p-2.5 hover:bg-muted/30 rounded-md group transition-colors cursor-pointer
                                        ${
                                            task.id === selectedTaskId
                                                ? task.completed
                                                    ? 'bg-lime-50 dark:bg-lime-900/20 border border-lime-200 dark:border-lime-800'
                                                    : 'bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800'
                                                : ''
                                        }
                                        ${
                                            task.id === selectedTaskId &&
                                            !task.completed
                                                ? 'border-l-4 rounded-l-none border-yellow-200 dark:border-yellow-800'
                                                : task.completed
                                                  ? 'border-l-4 rounded-l-none dark:border-lime-800 border-lime-200'
                                                  : 'border-l-4 rounded-l-none dark:border-zinc-800 border-zinc-200'
                                        }
                                    `}
                                                >
                                                    <div className="flex items-center gap-3 flex-1">
                                                        <Checkbox
                                                            checked={
                                                                task.completed
                                                            }
                                                            onCheckedChange={() =>
                                                                handleToggleTaskCompletion(
                                                                    task.id
                                                                )
                                                            }
                                                            onClick={(e) =>
                                                                e.stopPropagation()
                                                            }
                                                        />
                                                        <span
                                                            className={`truncate transition-colors w-0 flex-1 ${
                                                                task.completed
                                                                    ? 'text-primary/50 line-through'
                                                                    : 'text-primary/90 hover:text-primary'
                                                            }`}
                                                        >
                                                            {task.text}
                                                        </span>
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            onClick={(e) => {
                                                                e.stopPropagation()
                                                                handleDeleteTask(
                                                                    task.id
                                                                )
                                                            }}
                                                            className="h-7 w-7 p-1.5 text-red-600 hover:text-red-700 opacity-0 group-hover:opacity-100 transition-opacity"
                                                            title="Delete task"
                                                        >
                                                            <X className="h-3.5 w-3.5" />
                                                        </Button>
                                                    </div>

                                                    <div className="flex items-center gap-2 ml-4">
                                                        <DropdownMenu>
                                                            <DropdownMenuTrigger className="focus:outline-none">
                                                                <PriorityBadge
                                                                    priority={
                                                                        task.priority
                                                                    }
                                                                />
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent
                                                                align="end"
                                                                className="w-32 p-1"
                                                            >
                                                                <DropdownMenuItem
                                                                    onClick={(
                                                                        e
                                                                    ) => {
                                                                        e.stopPropagation()
                                                                        setTimeout(
                                                                            () => {
                                                                                handlePriorityChange(
                                                                                    task.id,
                                                                                    'high'
                                                                                )
                                                                            },
                                                                            120
                                                                        )
                                                                    }}
                                                                    className="focus:bg-red-100 dark:focus:bg-red-500/20 cursor-pointer"
                                                                >
                                                                    <span className="text-red-500">
                                                                        High
                                                                    </span>
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem
                                                                    onClick={(
                                                                        e
                                                                    ) => {
                                                                        e.stopPropagation()
                                                                        setTimeout(
                                                                            () => {
                                                                                handlePriorityChange(
                                                                                    task.id,
                                                                                    'medium'
                                                                                )
                                                                            },
                                                                            120
                                                                        )
                                                                    }}
                                                                    className="focus:bg-yellow-100 dark:focus:bg-yellow-500/20 cursor-pointer"
                                                                >
                                                                    <span className="text-yellow-500">
                                                                        Medium
                                                                    </span>
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem
                                                                    onClick={(
                                                                        e
                                                                    ) => {
                                                                        e.stopPropagation()
                                                                        setTimeout(
                                                                            () => {
                                                                                handlePriorityChange(
                                                                                    task.id,
                                                                                    'low'
                                                                                )
                                                                            },
                                                                            120
                                                                        )
                                                                    }}
                                                                    className="focus:bg-blue-100 dark:focus:bg-blue-500/20 cursor-pointer"
                                                                >
                                                                    <span className="text-blue-500">
                                                                        Low
                                                                    </span>
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem
                                                                    onClick={(
                                                                        e
                                                                    ) => {
                                                                        e.stopPropagation()
                                                                        setTimeout(
                                                                            () => {
                                                                                handlePriorityChange(
                                                                                    task.id,
                                                                                    undefined
                                                                                )
                                                                            },
                                                                            120
                                                                        )
                                                                    }}
                                                                    className="focus:bg-zinc-100 dark:focus:bg-zinc-500/20 cursor-pointer"
                                                                >
                                                                    <span className="text-zinc-500">
                                                                        None
                                                                    </span>
                                                                </DropdownMenuItem>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                        <span className="text-xs text-muted-foreground font-mono">
                                                            {new Date(
                                                                task.createdAt
                                                            ).toLocaleTimeString(
                                                                [],
                                                                {
                                                                    hour: '2-digit',
                                                                    minute: '2-digit',
                                                                }
                                                            )}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </ScrollArea>
                            </CollapsibleContent>
                        </Collapsible>
                    )}
                </div>

                <div className="grid grid-cols-1 gap-6 mt-8">
                    <Card className="border-none">
                        <CardContent className="sm:block grid sm:text-left text-center justify-center">
                            <div className="text-6xl font-bold mb-4">
                                {formatTime(timeLeft)}
                            </div>
                            <div className="mb-4">
                                {isBreak
                                    ? isLongBreak
                                        ? 'Long Break'
                                        : 'Short Break'
                                    : `Work Session ${currentSession}`}
                            </div>
                            <div className="mb-4">
                                Completed Cycles: {completedCycles}{' '}
                                {config.totalCycles > 0 &&
                                    `/ ${config.totalCycles}`}
                            </div>
                            <div className="flex space-x-2">
                                <Button onClick={start} disabled={isRunning}>
                                    Start
                                </Button>
                                <Button onClick={pause} disabled={!isRunning}>
                                    Pause
                                </Button>
                                <Button onClick={reset}>Reset</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                {isBreak && (
                    <>
                        {!isBreakEnded && (
                            <BreakEnforcer
                                onEnforce={setEnforceBreak}
                                onSkip={skipBreak}
                            />
                        )}
                        {isBreakEnded && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                <div className="bg-background p-8 rounded-lg flex flex-col items-center gap-4">
                                    <p className="text-lg">
                                        Break time is over!
                                    </p>
                                    <Button
                                        onClick={handleReadyClick}
                                        size="lg"
                                    >
                                        I'm ready to start the next session
                                    </Button>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </ThemeProvider>
    )
}
