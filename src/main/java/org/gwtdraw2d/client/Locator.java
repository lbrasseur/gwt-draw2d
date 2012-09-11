package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.Locator.
 * @author lautaro.brasseur
 * TODO: Start coding the wrapper!. 
 */
public class Locator extends Component {
	public Locator() {
		super();
	}    
	public Locator(final JavaScriptObject aJsObj) {
	    super(aJsObj);
	}
	/**
     * {@inheritDoc}
     */
    protected native JavaScriptObject create() /*-{
        return new $wnd.draw2d.Locator();
    }-*/;
}
