export const COMMANDS = {
  HELP: 'help',
  LIST: 'ls',
  CHANGE_DIR: 'cd',
  OPEN: 'open',
  PRINT_WD: 'pwd',
  CLEAR: 'clear',
} as const;

export const UI = {
  LINE_WIDTH: 60,
  NOTE_ICON : '📝',
  DIRECTORY_ICON: '📁',
}as const;

export const PATHS = {
  HOME: "~" as string,
  HOME_DISPLAY: '/home/battles',
} as const;