/*
 * This file is part of the lorddashme.github.io v3.
 *
 * (c) Joshua Clifford Reyes <reyesjoshuaclifford@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * Configuration File.
 * 
 * All common configuration related to the website are registered here.
 * 
 * @author Joshua Clifford Reyes <reyesjoshuaclifford@gmail.com>
 */
const WEBSITE_CONFIGURATION = {
  buildId: 'v3',
  buildVersion: '3.5.1',
  api: {
    contact: 'https://lorddashme-backend.herokuapp.com/contact/',
    strongPassword: 'https://lorddashme-php-backend.herokuapp.com/api/v1/strong_password/',
    contentHiding: '',
    contentHashing: ''
  }
};

export default WEBSITE_CONFIGURATION;
