package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.Line.
 * @author lautaro.brasseur
 * TODO: Start coding the wrapper!. 
 */
public class Line extends Component {
	  
		public Line(final JavaScriptObject aJsObj) {
		    super(aJsObj);
		}
    /**
     * {@inheritDoc}
     */
    protected native JavaScriptObject create() /*-{
        return new $wnd.draw2d.Line();
    }-*/;

    /**
     * Set the line width. This enforce a repaint of the line. This method fires
     * a document dirty event.
     * @param width The new line width of the figure.
     */
    public final native void setLineWidth(final int width) /*-{
        var jsThis = this.@org.gwtdraw2d.client.Line::getJsObj()();
        
        jsThis.setLineWidth(width);
    }-*/;

    /**
     * Sets the menu builder.
     * @param menuBuilder The menu builder
     */
    public final void setMenuBuilder(final MenuBuilder menuBuilder) {
        setMenuBuilder(getJsObj(), menuBuilder);
    }
    
	public final native String getId() /*-{
	var jsThis = this.@org.gwtdraw2d.client.Line::getJsObj()();

	return jsThis.getId();
	}-*/;
	
}
