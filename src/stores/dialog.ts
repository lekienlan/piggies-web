import { create } from 'zustand';

export interface IDialog {
  title?: string;
  content?: React.ReactElement | string;
  cancelText?: string;
  confirmText?: string;
  confirmColor?:
    | 'inherit'
    | 'error'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | undefined;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export interface IDialogStore extends IDialog {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  showDialog: (object: IDialog) => void;
}

const useDialogStore = create<IDialogStore>((set) => ({
  open: false,
  message: '',
  severity: 'error',
  showDialog: ({
    title,
    content,
    cancelText,
    confirmText,
    confirmColor,
    onCancel,
    onConfirm
  }) => {
    set({
      open: true,
      title,
      content,
      cancelText,
      confirmText,
      confirmColor,
      onCancel: () => {
        if (onCancel) onCancel();
        set({ open: false });
      },
      onConfirm: () => {
        if (onConfirm) onConfirm();
        set({ open: false });
      }
    });
  },
  onCancel: () => {},
  onConfirm: () => {}
}));
export default useDialogStore;
