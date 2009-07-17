package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.SVGFigure.
 * @author lautaro.brasseur
 */
public class SVGFigure extends Node {
    /**
     * {@inheritDoc}
     */
    protected native JavaScriptObject create()/*-{
        return new $wnd.draw2d.SVGFigure();
    }-*/;
}
