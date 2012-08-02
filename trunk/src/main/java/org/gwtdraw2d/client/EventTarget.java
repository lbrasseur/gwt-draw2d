package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.EventTarget.
 * @author lautaro.brasseur
 * TODO: Start coding the wrapper!. 
 */
public class EventTarget extends Component {
    /**
     * {@inheritDoc}
     */
    protected native JavaScriptObject create() /*-{
        return new $wnd.draw2d.EventTarget();
    }-*/;		
    public EventTarget(final JavaScriptObject aJsObj) {
	    super(aJsObj);
	}
}
