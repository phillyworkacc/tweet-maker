'use client'
import './Modal.css'
import { X } from 'lucide-react';
import { ReactNode } from 'react'

type ModalProps = {
   children: ReactNode;
   closeBtnAction: () => void;
}

export function Modal ({ children, closeBtnAction }: ModalProps) {
   return (
      <div className="modal">
         <div className='modal-box'>
            <div className="modal-close" onClick={closeBtnAction}><X size={20} /></div>
            {children}
         </div>
      </div>
   )
}
