import React, { Fragment } from "react"

import { Menu, Transition } from "@headlessui/react"
import { useI18nL10nContext } from "gatsby-plugin-i18n-l10n";
import { navigate } from "gatsby";

function LanguageIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            {...props}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
        </svg>
    )
}

enum Language {
    English = "en-US",
    Danish = "da-DK"
}

export default function LanguageDropdown() {
    const context = useI18nL10nContext();

    const switchLanguage = (language: Language) => {
        console.log(context)
        context.translations?.forEach(element => {
            if (language == element.locale) {
                navigate(element.path)
                return
            }
        });
    }

    return (
        <div className="">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition">
                        <LanguageIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700"/>
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition">
                        <div className="px-1 py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={() => switchLanguage(Language.English)}
                                        className={` text-zinc-800 group flex w-full items-center rounded-md px-6 py-2 text-sm justify-center`}
                                    >
                                        English
                                    </button>
                                )}
                            </Menu.Item>
                            <hr className="my-1 border-zinc-200" />
                            <Menu.Item>
                                {({ active }) => (

                                    <button
                                        onClick={() => switchLanguage(Language.Danish)}
                                        className={` text-zinc-800 group flex w-full items-center rounded-md px-6 py-2 text-sm justify-center`}
                                    >
                                        Dansk
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}