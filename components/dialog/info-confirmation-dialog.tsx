'use client'

import { Button } from '@/components/ui/button'
import DialogContentOverlayBlur from '@/components/ui/custom/dialog-content-overlay-blur'
import {
  Dialog,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from '@/components/ui/dialog'
import { useConfirmDialog } from '@/stores/dialogs/dialogs.selector'
import { updateConfirmDialog } from '@/stores/dialogs/dialogs.slice'
import { useAppDispatch } from '@/stores/store'

const InfoConfirmationDialog = () => {
  const dispatch = useAppDispatch()
  const {
    isOpen,
    title,
    description,
  } = useConfirmDialog()

  const onConfirm = () => {
    dispatch(updateConfirmDialog({ isOpen: false }))
  }

  const handleOpenChange = (open: boolean) => {
    dispatch(updateConfirmDialog({ isOpen: open }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContentOverlayBlur>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
        <DialogFooter className='flex flex-col gap-2 sm:flex-row sm:gap-0'>
          <Button variant="outline" onClick={onConfirm}>確認</Button>
        </DialogFooter>
      </DialogContentOverlayBlur>
    </Dialog>
  )
}

export default InfoConfirmationDialog
