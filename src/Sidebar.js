import React from "react";
import { GiHamburgerMenu, GiGraduateCap } from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {SiBookstack} from 'react-icons/si'
import {IoSettingsSharp} from 'react-icons/io5'
import {IoMdPeople, IoMdPerson} from 'react-icons/io'

const ICON_SIZE = 40

export default class Sidebar extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <aside className='w-16' style={{ height: '100%' }} aria-label="Sidebar">
                <div class="overflow-y-auto overflow-x-hidden py-4 px-3 bg-gray-50 rounded dark:bg-gray-800 h-full">
                    <a href="https://flowbite.com/" class="flex items-center mb-5">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-7" />
                    </a>
                    <ul class="space-y-2">
                        <li>
                            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <AiFillHome size={ICON_SIZE}></AiFillHome>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <SiBookstack size={ICON_SIZE}></SiBookstack>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <GiGraduateCap size={ICON_SIZE}></GiGraduateCap>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <IoMdPeople size={ICON_SIZE}></IoMdPeople>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <IoSettingsSharp size={ICON_SIZE}></IoSettingsSharp>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <IoMdPerson size={ICON_SIZE}></IoMdPerson>
                            </a>    
                        </li>
                    </ul>
                </div>
            </aside>
        )
    }
}