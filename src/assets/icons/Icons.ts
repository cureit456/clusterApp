/* eslint-disable prettier/prettier */
export type SvgIcon = {
    inlineSvg:string;
    iconTag:string;
}
const ADD_ICON : SvgIcon = {
    iconTag : 'add-icon',
    inlineSvg: `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
    `
};

export const icons:SvgIcon[] = [
    ADD_ICON
]