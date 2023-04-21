'use client';

import { Siren, PhoneCall, Pill, Fingerprint, QrCode, Share2 } from 'lucide-react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function Home() {

  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-8 px-4 text-zinc-800 bg-zinc-50">

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Contato de Emegência
                  </Dialog.Title>

                  <div className="flex flex-col gap-4 mt-6">

                    <div className="flex items-center gap-4 px-2 py-2 rounded hover:bg-zinc-100 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="text-emerald-500 w-8 h-8" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                      </svg>
                      <p className='text-zinc-600 font-medium'>Entrar em contato via WhatsApp</p>
                    </div>

                    <div className="flex items-center gap-4 px-2 py-2 rounded hover:bg-zinc-100 transition-colors">
                      <PhoneCall className='text-zinc-600 w-8 h-8' />
                      <p className='text-zinc-600 font-medium'>Ligação Direta</p>
                    </div>

                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <div className="flex flex-col w-full">

        <div className="flex items-center gap-4 w-full">
          <img src="http://github.com/gabrielst03.png" alt="" className='w-24 h-24 rounded-full border-4  border-blue-600' />
          <div className="flex flex-col">
            <h2 className="font-semibold">Gabriel Artur Santana de Oliveira</h2>
            <p className='text-blue-500 font-medium -mt-1'>Brasileiro, 20 Anos</p>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-16 text-lg font-semibold">
          <Siren className='text-blue-500 w-8 h-8' />
          Informações de Emergência
        </div>

        <div onClick={openModal} className="flex gap-2 font-medium text-md items-center w-full py-6 px-4 bg-gray-200 rounded-lg mt-10">
          <PhoneCall />
          +55 (71) 9 8143-5008 (Gleide, Mãe do Paciente)
        </div>

        <div className="flex flex-col gap-2 font-medium text-md w-full py-6 px-4 bg-gray-200 rounded-lg mt-5">
          <div className="flex items-center gap-2">
            <Pill />
            Alergias
          </div>

          <div className="flex items-center gap-2 text-sm text-zinc-500 font-normal">
            <h1>Dipirona, Ibuprofeno, Nimesulida, Cardenal e todos anti-inflamatórios</h1>
          </div>
        </div>

        <div className="flex flex-col gap-2 font-medium text-md w-full py-6 px-4 bg-gray-200 rounded-lg mt-5">
          <div className="flex items-center gap-2">
            <Fingerprint />
            Mais detalhes sobre o paciente
          </div>

          <div className="flex items-center gap-2 text-sm text-zinc-500 font-normal">
            <h1>Tenho 20 anos, sou natural de Cruz das Almas-BA, Brasileiro, tenho rinite alérgica e algumas alergias a medicamentos.</h1>
          </div>
        </div>

        <div className="flex flex-col items-center gap-1 mt-10">
          <QrCode className='w-40 h-40 text-blue-500' />
          <div className="flex items-center gap-2 font-medium">
            <Share2 />
            Compartilhar QRCode
          </div>
        </div>

      </div>
    </main>
  )
}
