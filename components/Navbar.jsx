"use client";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
    ArrowPathIcon,
    Bars2Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon
} from "@heroicons/react/24/outline";

import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";

const services = [
    {name: 'Website Development', description: 'Build a website that really converts the users into customers', href: '#', icon: CursorArrowRaysIcon },
    {name: 'Website Design', description: 'Create first impressions with unique web design.', href: '#', icon: SquaresPlusIcon },
    {name: 'Analytics & Tracking', description: 'Get a better understanding of the website traffic and conversion.', href: '#', icon: ChartPieIcon},
    {name: 'Performance Optimization', description: 'Optimize your site to run at blazing fast speed.', href: '#', icon: ArrowPathIcon}
]

const callsToAction = [
    {name: 'Learn More', href: '#', icon: PlayCircleIcon},
    {name: 'Contact Us', href: '#', icon: PhoneIcon}
]

function classNames(...classes){
    return classes.filter(Boolean).join(' ')
}

export default function Navbar(){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Dalio</span>
                        <div>
                            <span className="text-white text-5xl font-bold">D</span><span className="text-amber-300 text-5xl font-bold">a</span><span className="text-white text-5xl font-bold">lio</span>
                        </div>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white" onClick={() => setMobileMenuOpen(true)}>
                        <span className="sr-only">Open Main Menu</span>
                        <Bars2Icon className="w-6 h-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                            Services
                            <ChevronDownIcon className="w-5 h-5 flex-none text-white" aria-hidden="true" />
                        </Popover.Button>

                        <Transition as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-1 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-custom-light-gray shadow-lg ring-1 ring-custom-light-gray">
                                 <div className="p-4">
                                    {services.map((item) => (
                                        <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-amber-300">
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-amber-300 group-hover:bg-custom-blue">
                                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-custom-yellow" aria-hidden="true" />
                                            </div>
                                            <div className="flex-auto">
                                                <a href={item.href} className="block font-semibold text-custom-blue">
                                                    {item.name}
                                                    <span className="absolute inset-0"></span>
                                                </a>
                                                <p className="mt-1 text-slate-900 font-normal">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                 </div>
                                 <div className="grid grid-cols-2 divide-x divide-custom-gray bg-amber-300">
                                    {callsToAction.map((item) =>  (
                                        <a key={item.name} href={item.href} className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-custom-blue hover:bg-custom-gray">
                                            <item.icon className="h-5 w-5 flex-none text-slate-900" aria-hidden="true" />
                                            {item.name}
                                        </a>
                                    ))}
                                 </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    <a href="#" className="text-sm font-semibold leading-6 text-white">
                        Our Work
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-white">
                        About Us
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-white">
                        Our Process
                    </a>
                </Popover.Group>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-sm font-semibold leading-6 text-white">
                        Get Started <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>

            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10"></div>
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-custom-light-gray px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-custom-gray">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Dalio</span>
                            <div class="h-8 w-auto">
                            <span className="text-custom-blue text-4xl font-bold">D</span><span className="text-amber-300 text-4xl font-bold">a</span><span className="text-custom-blue text-4xl font-bold">lio</span>
                            </div>
                        </a>
                        <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                            <span className="sr-only">Close Menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-custom-gray">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    {({open}) => (
                                        <>
                                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-custom-blue hover:bg-custom-yellow">
                                            Services
                                            <ChevronDownIcon className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')} aria-hidden="true" />
                                          </Disclosure.Button>
                                          <Disclosure.Panel className="mt-2 space-y-2">
                                            {[...services, ...callsToAction].map((item) => (
                                                <Disclosure.Button key={item.name} as="a" href={item.href} className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-custom-blue hover:bg-custom-yellow">
                                                    {item.name}
                                                </Disclosure.Button>
                                            ))}
                                          </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-custom-blue hover:bg-custom-yellow">
                                    Our Work
                                </a>
                                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-custom-blue hover:bg-custom-yellow">
                                   About Us
                                </a>
                                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-custom-blue hover:bg-custom-yellow">
                                    Our Process
                                </a>
                            </div>
                            <div className="py-6">
                                <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-custom-blue hover:bg-custom-yellow">
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}