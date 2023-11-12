/* eslint-disable prettier/prettier */
export type SvgIcon = {
    inlineSvg:string;
    iconTag:string;
}

const ADD_ICON: SvgIcon = {
    iconTag : 'add-icon',
    inlineSvg: `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
    `
};

const BOOK_ICON: SvgIcon = {
    iconTag: 'book-icon',
    inlineSvg: `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M240-80q-50 0-85-35t-35-85v-560q0-50 35-85t85-35h440v640H240q-17 0-28.5 11.5T200-200q0 17 11.5 28.5T240-160h520v-640h80v720H240Zm120-240h240v-480H360v480Zm-80 0v-480h-40q-17 0-28.5 11.5T200-760v447q10-3 19.5-5t20.5-2h40Zm-80-480v487-487Z"/></svg>
    `
}

const BACK_ARROW: SvgIcon = {
    iconTag: 'arrow-back-icon',
    inlineSvg: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>`
}

const EXIT_ICON: SvgIcon = {
    iconTag:'exit-icon',
    inlineSvg: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>`
}

export const icons: SvgIcon[] = [
    ADD_ICON, BOOK_ICON, BACK_ARROW,EXIT_ICON
]