<?php

namespace Drupal\ckeditor_plugins\Plugin\CKEditorPlugin;

use Drupal\ckeditor\CKEditorPluginBase;
use Drupal\editor\Entity\Editor;

/**
 * Defines the "myservicelink" plugin.
 *
 * @CKEditorPlugin(
 *   id = "myservicelink",
 *   label = @Translation("myservicelink"),
 *   module = "ckeditor_plugins"
 * )
 */
class MyServiceLink extends CKEditorPluginBase
{

  /**
   * {@inheritdoc}
   */
  public function getFile()
  {
    return drupal_get_path('module', 'ckeditor_plugins') . '/js/plugins/myservicelink/plugin.js';
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
    $path = drupal_get_path('module', 'ckeditor_plugins') . '/js/plugins/myservicelink';
    return [
      'myservicelink' => [
        'label' => t('myservicelink'),
        'image' => $path . '/icons/myservicelink.png',
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
