<?php

namespace Drupal\ckeditor_plugins\Plugin\CKEditorPlugin;

use Drupal\ckeditor\CKEditorPluginBase;
use Drupal\editor\Entity\Editor;

/**
 * Defines the "Responsive Tabs" plugin.
 *
 * @CKEditorPlugin(
 *   id = "responsivetabs",
 *   label = @Translation("Responsive Tabs"),
 *   module = "ckeditor_plugins"
 * )
 */
class ResponsiveTabs extends CKEditorPluginBase
{

  /**
   * {@inheritdoc}
   */
  public function getFile()
  {
    return drupal_get_path('module', 'ckeditor_plugins') . '/js/plugins/responsivetabs/plugin.js';
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
    $path = drupal_get_path('module', 'ckeditor_plugins') . '/js/plugins/responsivetabs';
    return [
      'responsivetabs' => [
        'label' => t('Responsive Tabs'),
        'image' => $path . '/icons/responsivetabs.png',
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
