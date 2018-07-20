<?php

function theatrecustom_events_settings_form($form, &$form_state)
{
  $form['theatrecustom_events_promo_def_url'] = array(
    '#type'             => 'textfield',
    '#required'         => TRUE,
    '#title'            => t('Event Promo Code Default URL'),
    '#description'      => t('The fully qualified (http://example.com) URL to use as the default for the promo code links.'),
    '#default_value'    => variable_get('theatrecustom_events_promo_def_url', ''),
  );

  return system_settings_form($form);
}
