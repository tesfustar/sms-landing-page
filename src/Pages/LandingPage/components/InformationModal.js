import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useHomeContext } from "../../../context/HomeContext";
import Information from "./Information";
import { FaTimes } from "react-icons/fa";
const InformationModal = () => {
  const { isModalOpen, setIsModalOpen } = useHomeContext();
  return (
    <>
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40"
          onClose={() => setIsModalOpen(true)}
        >
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
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 text-center pb-5 capitalize"
                  >
                   Customer Information
                  </Dialog.Title>
                  <div onClick={() => setIsModalOpen(false)}
                  className="absolute right-2 top-2 p-1 cursor-pointer border-2 border-slate-400 rounded-lg">
                    <FaTimes className="text-slate-400"/>
                  </div>
                  <Information />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default InformationModal;
