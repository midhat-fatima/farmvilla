<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'WPCACHEHOME', 'C:\xampp\htdocs\farmvilla\wp-content\plugins\wp-super-cache/' );
define('WP_CACHE', true);
define( 'DB_NAME', 'farmvilla' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'p5?Xd&+69El@Iw-6I{[`Xf.6Cbui%X/LN?yejEO~qI>C?PB[d_p9$j>NJdn@@ST[' );
define( 'SECURE_AUTH_KEY',  'Ku*tF/<RZ>g7sPNdJ-y)UOG,+6U(F|$`WI6 :Cr D7a+&C?V2 Br#cc{L?shC%,<' );
define( 'LOGGED_IN_KEY',    'iO{+6,q3AzfP(uF3*5%+e-#%D*YWJqcx&vsva@d&gTG);kFO{^tNc44OlY&6G)`E' );
define( 'NONCE_KEY',        '? `iLBDko_>!Ss)m6rZUI=s9.QUw[F/`O <E@z-E*/GH/+ rU`I}E_]MLizb]|`#' );
define( 'AUTH_SALT',        'q8%lmi1 *8*<@F5}wLnYLSPq:,E./I4Y+7.cswav-$#m,:k3}Hfm]Mj UI=Ai8~j' );
define( 'SECURE_AUTH_SALT', 'lU6/|IVL6TFy[kS8~X9nr.q18IvWefUhZCiHnaJ;sA$BvI$$,@`in5!J-:R1H2lA' );
define( 'LOGGED_IN_SALT',   'gzH) 0/rDf>S=L@os&_nQ)qkr^.K{k!-OEa->cLCRD3:DR@k@se^kt.6Cs_ 0G-o' );
define( 'NONCE_SALT',       'ap^![lE8NX1RDJ0GGJrUhtWRGjaa6<&u_/.3|F~dWKN6euU2PL/k9`O>d;i^yd5M' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
