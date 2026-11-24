/**
 * Gray. Only what I needed.
 * Made with the Valenced theme studio. Goes in the plugin template's `themes/` folder next to manifest.json.
 * Every base is themed.
 */

/// <reference types="@valenced/themes-api" />

import type { ThemeColors } from '@valenced/themes-api/types'

// @studio-appearance {}


const colors: ThemeColors = {
	semantic: {
		dark: {
			BACKGROUND_BRAND: '#656666', // colours the selected Messages button in the server sidebar
			BACKGROUND_FEEDBACK_NOTIFICATION: '#615f5f', // fills direct-mention count pills and the notification...
			BADGE_NOTIFICATION_BACKGROUND: '#262626', // colours the notification badge fill
			CHAT_INPUT_ACTION_BUTTON_ICON_DEFAULT_TINT: '#ffffff', // colours the attachment, gift and microphone icons
			CHAT_INPUT_ICON_DEFAULT_TINT: '#fcfcff', // colours the emoji-picker toggle in the composer
			CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND: '#505050', // colours the send button when a message draft is present
			CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT: '#616161', // colours the fill of destructive buttons
			CONTROL_PRIMARY_BACKGROUND_ACTIVE: '#2a2a2a',
			CONTROL_PRIMARY_BACKGROUND_DEFAULT: '#979797', // colours the fill of primary buttons
			ICON_MUTED: '#ffffff', // colours the emoji sheet handle
			ICON_STATUS_DND: '#4b0707',
			ICON_STATUS_IDLE: '#605b06',
			ICON_STATUS_OFFLINE: '#000000',
			ICON_VOICE_CONNECTED: '#6c6c6c', // listening icon at the top right of activity cards
			MESSAGE_MENTIONED_BACKGROUND_DEFAULT: '#e8e8e714', // colours the background of messages that mention you,...
			REDESIGN_CHANNEL_NAME_TEXT: '#ffffff', // colours unread channel names in the server list
			REDESIGN_INPUT_CONTROL_SELECTED: '#616161', // fills selected radio controls and the active portion of...
			STATUS_POSITIVE: '#394e42', // colours the positive activity icon in the profile bar
			SWITCH_BACKGROUND_SELECTED_DEFAULT: '#a3a3a3', // colours the track fill of switches that are on
			TEXT_FEEDBACK_POSITIVE: '#6c6c6c', // colours the added update heading and divider
			TEXT_LINK: '#808283', // colours the Learn more link in the Family Centre...
		},
		darker: {
			BACKGROUND_BRAND: '#656666', // colours the selected Messages button in the server sidebar
			BACKGROUND_FEEDBACK_NOTIFICATION: '#615f5f', // fills direct-mention count pills and the notification...
			BADGE_NOTIFICATION_BACKGROUND: '#262626', // colours the notification badge fill
			CHAT_INPUT_ACTION_BUTTON_ICON_DEFAULT_TINT: '#ffffff', // colours the attachment, gift and microphone icons
			CHAT_INPUT_ICON_DEFAULT_TINT: '#fcfcff', // colours the emoji-picker toggle in the composer
			CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND: '#505050', // colours the send button when a message draft is present
			CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT: '#616161', // colours the fill of destructive buttons
			CONTROL_PRIMARY_BACKGROUND_ACTIVE: '#2a2a2a',
			CONTROL_PRIMARY_BACKGROUND_DEFAULT: '#979797', // colours the fill of primary buttons
			ICON_MUTED: '#ffffff', // colours the emoji sheet handle
			ICON_STATUS_DND: '#4b0707',
			ICON_STATUS_IDLE: '#605b06',
			ICON_STATUS_OFFLINE: '#000000',
			ICON_VOICE_CONNECTED: '#6c6c6c', // listening icon at the top right of activity cards
			MESSAGE_MENTIONED_BACKGROUND_DEFAULT: '#e8e8e714', // colours the background of messages that mention you,...
			REDESIGN_CHANNEL_NAME_TEXT: '#ffffff', // colours unread channel names in the server list
			REDESIGN_INPUT_CONTROL_SELECTED: '#616161', // fills selected radio controls and the active portion of...
			STATUS_POSITIVE: '#394e42', // colours the positive activity icon in the profile bar
			SWITCH_BACKGROUND_SELECTED_DEFAULT: '#a3a3a3', // colours the track fill of switches that are on
			TEXT_FEEDBACK_POSITIVE: '#6c6c6c', // colours the added update heading and divider
			TEXT_LINK: '#808283', // colours the Learn more link in the Family Centre...
		},
		light: {
			CONTROL_PRIMARY_BACKGROUND_DEFAULT: '#2b2b2b', // colours the fill of primary buttons
		},
		midnight: {
			BACKGROUND_BRAND: '#656666', // colours the selected Messages button in the server sidebar
			BACKGROUND_FEEDBACK_NOTIFICATION: '#615f5f', // fills direct-mention count pills and the notification...
			BADGE_NOTIFICATION_BACKGROUND: '#262626', // colours the notification badge fill
			CHAT_INPUT_ACTION_BUTTON_ICON_DEFAULT_TINT: '#ffffff', // colours the attachment, gift and microphone icons
			CHAT_INPUT_ICON_DEFAULT_TINT: '#fcfcff', // colours the emoji-picker toggle in the composer
			CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND: '#505050', // colours the send button when a message draft is present
			CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT: '#616161', // colours the fill of destructive buttons
			CONTROL_PRIMARY_BACKGROUND_ACTIVE: '#2a2a2a',
			CONTROL_PRIMARY_BACKGROUND_DEFAULT: '#979797', // colours the fill of primary buttons
			ICON_MUTED: '#ffffff', // colours the emoji sheet handle
			ICON_STATUS_DND: '#4b0707',
			ICON_STATUS_IDLE: '#605b06',
			ICON_STATUS_OFFLINE: '#000000',
			ICON_VOICE_CONNECTED: '#6c6c6c', // listening icon at the top right of activity cards
			MESSAGE_MENTIONED_BACKGROUND_DEFAULT: '#e8e8e714', // colours the background of messages that mention you,...
			REDESIGN_CHANNEL_NAME_TEXT: '#ffffff', // colours unread channel names in the server list
			REDESIGN_INPUT_CONTROL_SELECTED: '#616161', // fills selected radio controls and the active portion of...
			STATUS_POSITIVE: '#394e42', // colours the positive activity icon in the profile bar
			SWITCH_BACKGROUND_SELECTED_DEFAULT: '#a3a3a3', // colours the track fill of switches that are on
			TEXT_FEEDBACK_POSITIVE: '#6c6c6c', // colours the added update heading and divider
			TEXT_LINK: '#808283', // colours the Learn more link in the Family Centre...
		},
	},
	raw: {
		BLUE_NEW_27: '#939393',
		BRAND_NEW_500_ALPHA_20: '#74747433',
		GREEN_360: '#5c5c5c',
		YELLOW_300: '#ffffff',
	},
}

export default plugin({
	// Registering in preInit means a picked theme is ready before Discord draws anything
	preInit({ themes }) {
		themes.registerGroup('my-themes', {
			name: 'My Themes',
		})

		themes.registerTheme('my-themes', 'gray', {
			name: 'Gray',
			description: 'Only what I needed.',
			getColors: () => colors,
		})
	},
})
