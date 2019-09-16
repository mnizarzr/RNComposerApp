export const Action = {
    LOGIN_POST : 'LOGIN_POST',
    CHECK_SIGNED : 'CHECK_SIGNED',
    CHANGE_STATE : 'CHANGE_STATE',
    CHANGE_MENU : 'CHANGE_MENU',
    TOGGLE_MENU : 'TOGGLE_MENU',
    LOGOUT : 'LOGOUT'
}

export const AuthKey = {
    IS_SIGNED : 'IS_SIGNED',
    USERNAME : 'USERNAME',
    PASSWORD : 'PASSWORD',
    TOKEN : 'TOKEN',

}

export const Menu = [
    {
        id: "0",
        name: "Composition"
    },
    {
        id: "1",
        name: "Material"
    },
    {
        id: "2",
        name: "History"
    }
]

export const Color = {
    WHITE : '#FFFFFF',
    BLACK : '#444444',
    DARK_GREY : '#777777',
    GREY : '#AAAAAA',
    LIGHT_GREY : '#F2F2F2',
    COLOR_PRIMARY : '#F2C94C'
}

export const LayoutConst = {
    spacing: 20,
    regularSpacing: 15,
    smallSpacing: 10,
    roundedCorner: 6,

    extraLargeTextSize: 36,
    largeTextSize: 24,
    mediumTextSize: 20,
    regularTextSize: 16,
    inputTextSize: 15,
    smallTextSize: 14,

    regularIconSize: 22,
    smallIconSize:16
}