package org.gwtdraw2d.client;

/**
 * Interface used to decouple menu creation (in order to avoid overriding
 * getContextMenu() methods).
 * @author lautaro.brasseur
 */
public interface MenuBuilder {
    /**
     * Builds the menu.
     * @return The menu
     */
    Menu buildMenu();
}
