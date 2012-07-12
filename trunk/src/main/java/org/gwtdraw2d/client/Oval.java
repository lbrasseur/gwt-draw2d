package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.Oval.
 * @author lautaro.brasseur
 * TODO: Start coding the wrapper!. 
 */
public class Oval extends VectorFigure {
	public Oval() {
		super();
	}
    public Oval(JavaScriptObject aJsObj) {
		super(aJsObj);
		// TODO Auto-generated constructor stub
	}

	/**
     * {@inheritDoc}
     */
    protected native JavaScriptObject create() /*-{
        return new $wnd.draw2d.Oval();
    }-*/;
}
