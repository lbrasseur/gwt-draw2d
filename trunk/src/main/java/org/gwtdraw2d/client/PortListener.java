package org.gwtdraw2d.client;

/**
 * Listener for draw2d.Port events.
 * @author lautaro.brasseur
 */
public interface PortListener {
    /**
     * Callback for drop on another port.
     * @param port The port
     */
    void onDrop(Port port);
}
