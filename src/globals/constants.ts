import { Layout } from "./layout";

class _Constants {
  /**
   * Durations in millisecs
   */
  readonly duration = {
    extraShort: 250,
    short: 500,
    medium: 1000,
    long: 2000,
    extraLong: 6000,
  };

  readonly REGEX_EMAIL =
    /^\s*\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.[a-zA-Z0-9\-]{2,})+\s*$/;

  readonly DEFAULT_SCREEN_PADDING = Layout.widthPercentageToDP(
    Layout.medium / Layout.divisionFactorForWidth
  );

  readonly DATE_MONTH_YEAR_FORMATE_DASHED = "DD-MM-YYYY";
  readonly DATE_MONTH_YEAR_FORMATE_SLASHED = "DD/MM/YYYY";

  readonly MINIMUM_VALID_DOB = new Date("1890-01-01T00:00:00");
  readonly CALENDAR_FUTURE_DAYS = 10;
  readonly MINIMUM_AGE_FOR_REGISTRATION = 18;

  readonly commaSeparator = ",";

  readonly OTP_INPUT_CELL_SIZE = 40;
  readonly COUNTRY_ITEM_HEIGHT = 48;

  readonly DEBOUNCE_DELAY = 400;
  readonly DISPOSE_DELAY = 700;
  readonly MAX_TIME_ALLOW_TO_RESEND_OTP = 60; //in sconds;

  readonly MAXIMUM_OTP_CODE_LENGTH = 6;
  readonly DELIVERY_CHARGES = 30;

  readonly POP_UP_DURATION = 3000;
  readonly POP_UP_DIRECTION = "bottom";
  readonly POP_UP_GESTTURE_CONFIG_DIRECTION = "y";

  readonly DEFAULT_APP_LOCALE = "en-US";

  readonly APP_PLAY_STORE_LINK = "playstore link";
  readonly APP_APPLE_STORE_LINK = "applestore link";

  readonly S3_BASE_URL = "https://sooq365.s3.ap-southeast-1.amazonaws.com/";

  readonly DEFAULT_APP_LOCALAUDIO_PLAYER_IMAGE =
    "https://images.unsplash.com/photo-1536811145290-bc394643e51e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90JTIwZ2lybCUyMGRhbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60";
}

export const Constants = new _Constants();
