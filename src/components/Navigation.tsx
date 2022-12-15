import { Popover, Transition } from "@headlessui/react"
import { LocalizedLink } from "gatsby-plugin-i18n-l10n"
import React, { Fragment, PropsWithChildren } from "react"
import { useIntl } from "react-intl"

function CloseIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function ChevronDownIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
            <path
                d="M1.75 1.75 4 4.25l2.25-2.5"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

const MobileNavItem: React.FC<PropsWithChildren> = props => {
    return (
        <li>
            <Popover.Button className="block py-2">
                {props.children}
            </Popover.Button>
        </li>
    )
}

export function MobileNavigation(props: PropsWithChildren<{ className?: string }>) {
    const intl = useIntl()
    return (
        <Popover {...props}>
            <Popover.Button className="group flex items-center rounded-full bg-red-50 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
                {intl.formatMessage({ id: "menu" })}
                <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700" />
            </Popover.Button>
            <Transition.Root>
                <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Popover.Overlay className="" />
                </Transition.Child>
                <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel
                        focus
                        className="fixed inset-x-4 top-20 z-50 origin-top rounded-3xl bg-red-50 p-8 ring-1 ring-zinc-900/5"
                    >
                        <div className="flex flex-row-reverse items-center justify-between">
                            <Popover.Button aria-label={intl.formatMessage({ id: "aria-close-menu" })} className="-m-1 p-1">
                                <CloseIcon className="h-6 w-6 text-zinc-500" />
                            </Popover.Button>
                            <h2 className="text-sm font-medium text-zinc-600">
                                {intl.formatMessage({ id: "navigation" })}
                            </h2>
                        </div>
                        <nav className="mt-6">
                            <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800">
                                <MobileNavItem><LocalizedLink to={"/"}>{intl.formatMessage({ id: "home" })}</LocalizedLink></MobileNavItem>
                                <MobileNavItem><LocalizedLink to={"/contact/"}>{intl.formatMessage({ id: "contact" })}</LocalizedLink></MobileNavItem>
                            </ul>
                        </nav>
                    </Popover.Panel>
                </Transition.Child>
            </Transition.Root>
        </Popover>
    )
}

export function DesktopNavigation(props: PropsWithChildren<{className?: string}>) {
    const intl = useIntl()

    return (
        <div {...props}>
            <LocalizedLink to="/" className="text-white text-base">{intl.formatMessage({ id: "home" })}</LocalizedLink>
            <LocalizedLink to="/contact" className="text-white text-base">{intl.formatMessage({ id: "contact" })}</LocalizedLink>
        </div>
    )
}