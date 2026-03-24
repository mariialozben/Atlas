import { useState, useCallback } from 'react'

export function useUploadArea(onFilesSelected?: (files: File[]) => void) {
  const [isDragging, setIsDragging] = useState(false)
  const [files, setFiles] = useState<File[]>([])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const dropped = Array.from(e.dataTransfer.files)
    setFiles((prev) => [...prev, ...dropped])
    onFilesSelected?.(dropped)
  }, [onFilesSelected])

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files ?? [])
    setFiles((prev) => [...prev, ...selected])
    onFilesSelected?.(selected)
  }, [onFilesSelected])

  return { isDragging, files, handleDragOver, handleDragLeave, handleDrop, handleInputChange }
}
