package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.Point.
 * @author lautaro.brasseur
 * TODO: Start coding the wrapper!. 
 */
public class Point extends Component {
    /**
     * {@inheritDoc}
     */
    protected native JavaScriptObject create() /*-{
        return new $wnd.draw2d.Point();
    }-*/;

	public Point() {
		this.create();
	}
    public Point(final JavaScriptObject aJsObj) {
        super(aJsObj);
    }
}
