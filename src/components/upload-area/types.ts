export interface UploadAreaProps {
  onFilesSelected?: (files: File[]) => void
  accept?: string
  multiple?: boolean
}
