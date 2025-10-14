import { createSlice } from '@reduxjs/toolkit'

export interface DialogsState {
  confirmDialog: {
    isOpen: boolean
    title: string
    description: string
  },
  deleteDialog: {
    isOpen: boolean
    title: string
    description: string
    onDelete: () => void
  }  
}

const initialState: DialogsState = {
  confirmDialog: {
    isOpen: false,
    title: '',
    description: '',
  },
  deleteDialog: {
    isOpen: false,
    title: '',
    description: '',
    onDelete: () => { },
  },
}

const dialogsSlice = createSlice({
  name: 'dialogs',
  initialState,
  reducers: {
    updateConfirmDialog(
      state,
      action: {
        payload: {
          isOpen?: boolean
          title?: string
          description?: string
        }
      },
    ) {
      if (!action.payload.isOpen) {
        state.confirmDialog.isOpen = false
        state.confirmDialog.title = ''
        state.confirmDialog.description = ''
      } else {
        state.confirmDialog = {
          ...state.confirmDialog,
          ...action.payload,
        }
      }
    },
    updateDeleteDialog(
      state,
      action: {
        payload: {
          isOpen?: boolean
          title?: string
          description?: string
          onDelete?: () => void
        }
      },
    ) {
      if (!action.payload.isOpen) {
        state.deleteDialog.isOpen = false
        state.deleteDialog.title = ''
        state.deleteDialog.description = ''
        state.deleteDialog.onDelete = () => { }
      } else {
        state.deleteDialog = {
          ...state.deleteDialog,
          ...action.payload,
        }
      }
    },
  },
})

export const { updateConfirmDialog, updateDeleteDialog } = dialogsSlice.actions
export default dialogsSlice.reducer
