
export const AccountCreateVariables = {
    "variables": {
        "full_name": 'default full name',
        // "last_name": 'default last name',
        "email": '',
        "username": '',
        'clik_invite_key': '',
        'inviter_username': '',
    }
}


export const UserCreateVariables = {
    "variables": {
        "username": '',
        "description": '',
        "profile_pic": '',
        "banner_background": {
            "type": "PICTURE",
            "picture": {
                "background_pic": '',
                "font": '',
                "brightness": '',
                "crop_left_x": 0,
                "crop_top_y": 0,
                "crop_right_x": 1,
                "crop_bottom_y": 1
            }
        }
    }
}


export const UserDetailsVariables = {
    "variables": {
        "id": ""
    }
}


export const ChangeSubscriptionVariables = {
    "variables": {
        "type": ""
    }
}

export const ChangeAccountSettingsVariables = {
    "variables": {
        "email": null, "email_notification_monthly_earnings": null, "email_notification_weclikd_updates": null, "email_notification_clik_invitations": null
    }
}



export const UserEditVariables = {
    "variables": {
        "username": null,
        "profile_pic": null,
        "website": null,
        "description": null,
        "full_name": null
    }
}