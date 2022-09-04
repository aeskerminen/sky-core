import React from "react";
import { GiHamburgerMenu, GiGraduateCap } from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {SiBookstack} from 'react-icons/si'
import {IoSettingsSharp} from 'react-icons/io5'
import {IoMdPeople, IoMdPerson} from 'react-icons/io'
import { Link } from "react-router-dom";

const ICON_SIZE = 25

export default class Sidebar extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <aside className='w-16 grid-cols-1' style={{ height: '100%' }} aria-label="Sidebar">
                <div class="overflow-y-auto overflow-x-hidden py-4 px-2 bg-gray-50 rounded dark:bg-gray-800 h-full">
                    <a href="" class="flex items-center mb-5">
                        <img src="sn_logo_no_text.png" className="" />
                    </a>
                    <ul class="space-y-3 top-1/3 mx-auto" style={{position: 'relative'}}>
                        <li>
                            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <Link to="/">
                                    <AiFillHome className="mx-auto" size={ICON_SIZE}></AiFillHome>
                                </Link>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <Link to="books">
                                    <SiBookstack className="mx-auto" size={ICON_SIZE}></SiBookstack>
                                </Link>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <GiGraduateCap className="mx-auto" size={ICON_SIZE}></GiGraduateCap>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <IoMdPeople className="mx-auto" size={ICON_SIZE}></IoMdPeople>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <IoSettingsSharp className="mx-auto" size={ICON_SIZE}></IoSettingsSharp>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <IoMdPerson className="mx-auto" size={ICON_SIZE}></IoMdPerson>
                            </a>    
                        </li>
                    </ul>
                </div>
            </aside>
        )
    }
}