package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.SnapToGeometryEntry.
 * @author lautaro.brasseur
 */
public class SnapToGeometryEntry extends Component {
    /**
     * {@inheritDoc}
     */
    protected final native JavaScriptObject create()/*-{
        return new $wnd.draw2d.SnapToGeometryEntry();
    }-*/;
}
