package org.gwtdraw2d.client;

/**
 * Callback for menu item actions.
 * @author lautaro.brasseur
 */
public interface MenuItemCallback {
    /**
     * Callback method to be called when an item is selected.
     * @param menuItem The menu item
     */
    void onSelect(MenuItem menuItem);
}
