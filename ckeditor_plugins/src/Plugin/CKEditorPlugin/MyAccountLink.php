<?php

namespace Drupal\ckeditor_plugins\Plugin\CKEditorPlugin;

use Drupal\ckeditor\CKEditorPluginBase;
use Drupal\editor\Entity\Editor;

/**
 * Defines the "myaccountlink" plugin.
 *
 * @CKEditorPlugin(
 *   id = "myaccountlink",
 *   label = @Translation("myaccountlink"),
 *   module = "ckeditor_plugins"
 * )
 */
class MyAccountLink extends CKEditorPluginBase
{

  /**
   * {@inheritdoc}
   */
  public function getFile()
  {
    return drupal_get_path('module', 'ckeditor_plugins') . '/js/plugins/myaccountlink/plugin.js';
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
    $path = drupal_get_path('module', 'ckeditor_plugins') . '/js/plugins/myaccountlink';
    return [
      'myaccountlink' => [
        'label' => t('myaccountlink'),
        'image' => $path . '/icons/myaccountlink.png',
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
