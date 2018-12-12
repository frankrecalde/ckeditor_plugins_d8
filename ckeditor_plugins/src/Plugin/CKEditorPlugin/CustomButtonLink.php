<?php

namespace Drupal\ckeditor_plugins\Plugin\CKEditorPlugin;

use Drupal\ckeditor\CKEditorPluginBase;
use Drupal\editor\Entity\Editor;

/**
 * Defines the "custombuttonlink" plugin.
 *
 * @CKEditorPlugin(
 *   id = "custombuttonlink",
 *   label = @Translation("custombuttonlink"),
 *   module = "ckeditor_plugins"
 * )
 */
class CustomButtonLink extends CKEditorPluginBase
{

  /**
   * {@inheritdoc}
   */
  public function getFile()
  {
    return drupal_get_path('module', 'ckeditor_plugins') . '/js/plugins/custombuttonlink/plugin.js';
  }

  /**
   * {@inheritdoc}
   */
  public function getDependencies(Editor $editor)
  {
    return [];
  }

  /**
   * {@inheritdoc}
   */
  public function getLibraries(Editor $editor)
  {
    return [];
  }

  /**
   * {@inheritdoc}
   */
  public function isInternal()
  {
    return false;
  }

  /**
   * {@inheritdoc}
   */
  public function getButtons()
  {
    $path = drupal_get_path('module', 'ckeditor_plugins') . '/js/plugins/custombuttonlink';
    return [
      'custombuttonlink' => [
        'label' => t('custombuttonlink'),
        'image' => $path . '/icons/custombuttonlink.png',
      ],
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function isEnabled(Editor $editor)
  {
  }

  /**
   * {@inheritdoc}
   */
  public function getConfig(Editor $editor)
  {
    return [];
  }

}
