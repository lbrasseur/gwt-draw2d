package org.gwtdraw2d.client;

/**
 * Listener for draw2d.Port events.
 * @author lautaro.brasseur
 */
public interface PortListener {
    /**
     * Callback for drop on another port.
     * @param source The source port
     * @param target The target port
     */
    void onDrop(Port source, Port target);
}
