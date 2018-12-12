<?php

namespace Drupal\ckeditor_plugins\Plugin\CKEditorPlugin;

use Drupal\ckeditor\CKEditorPluginBase;
use Drupal\editor\Entity\Editor;

/**
 * Defines the "Expand/Collapse" plugin.
 *
 * @CKEditorPlugin(
 *   id = "expandcollapse",
 *   label = @Translation("Expand/Collapse"),
 *   module = "ckeditor_plugins"
 * )
 */
class ExpandCollapse extends CKEditorPluginBase
{

  /**
   * {@inheritdoc}
   */
  public function getFile()
  {
    return drupal_get_path('module', 'ckeditor_plugins') . '/js/plugins/expandcollapse/plugin.js';
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
    $path = drupal_get_path('module', 'ckeditor_plugins') . '/js/plugins/expandcollapse';
    return [
      'expandcollapse' => [
        'label' => t('Show all / Hide all'),
        'image' => $path . '/icons/expandcollapse.png',
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
