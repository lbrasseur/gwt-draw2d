# Example with Draw2d + GWT-Ext #

This page shows a simple test using Draw2d and GWT-Ext. You must provide images, such as Start.png which is used in com/pru/client/Pruebas.java. Also, copy the Ext-js library in public/js and Draw2d files in public/draw2d.

Link to built version: http://gwt-draw2d.googlecode.com/files/prueba_draw2d.zip

Create the following files:


## com/pru/Pruebas.gwt.xml ##
```
<module>
	<!-- Inherit the core Web Toolkit stuff.                  -->
	<inherits name='com.google.gwt.user.User'/>
	<inherits name='org.gwtdraw2d.GwtDraw2d'/>
	<inherits name='com.gwtext.GwtExt'/>

	<!-- Specify the app entry point class.                   -->
	<entry-point class='com.pru.client.Pruebas'/>
	
	<stylesheet src="js/ext/resources/css/borders.css" />
	<stylesheet src="js/ext/resources/css/box.css" />
	<stylesheet src="js/ext/resources/css/button.css" />
	<stylesheet src="js/ext/resources/css/combo.css" />
	<stylesheet src="js/ext/resources/css/core.css" />
	<stylesheet src="js/ext/resources/css/date-picker.css" />
	<stylesheet src="js/ext/resources/css/dd.css" />
	<stylesheet src="js/ext/resources/css/debug.css" />
	<stylesheet src="js/ext/resources/css/dialog.css" />
	<stylesheet src="js/ext/resources/css/editor.css" />
	<stylesheet src="js/ext/resources/css/form.css" />
	<stylesheet src="js/ext/resources/css/grid.css" />
	<stylesheet src="js/ext/resources/css/layout.css" />
	<stylesheet src="js/ext/resources/css/menu.css" />
	<stylesheet src="js/ext/resources/css/panel.css" />
	<stylesheet src="js/ext/resources/css/progress.css" />
	<stylesheet src="js/ext/resources/css/qtips.css" />
	<stylesheet src="js/ext/resources/css/reset.css" />
	<stylesheet src="js/ext/resources/css/reset-min.css" />
	<stylesheet src="js/ext/resources/css/resizable.css" />
	<stylesheet src="js/ext/resources/css/tabs.css" />
	<stylesheet src="js/ext/resources/css/toolbar.css" />
	<stylesheet src="js/ext/resources/css/tree.css" />
	<stylesheet src="js/ext/resources/css/window.css" />
</module>
```
## com/pru/client/Pruebas.java ##
```
package com.pru.client;

import org.gwtdraw2d.client.Annotation;
import org.gwtdraw2d.client.Color;
import org.gwtdraw2d.client.CommandConnect;
import org.gwtdraw2d.client.Connection;
import org.gwtdraw2d.client.ImageFigure;
import org.gwtdraw2d.client.InputPort;
import org.gwtdraw2d.client.Menu;
import org.gwtdraw2d.client.MenuBuilder;
import org.gwtdraw2d.client.MenuItem;
import org.gwtdraw2d.client.MenuItemCallback;
import org.gwtdraw2d.client.OutputPort;
import org.gwtdraw2d.client.Port;
import org.gwtdraw2d.client.PortListener;
import org.gwtdraw2d.client.Workflow;

import com.google.gwt.core.client.EntryPoint;
import com.gwtext.client.core.EventObject;
import com.gwtext.client.core.RegionPosition;
import com.gwtext.client.dd.DragData;
import com.gwtext.client.dd.DragSource;
import com.gwtext.client.dd.DragSourceConfig;
import com.gwtext.client.dd.DropTarget;
import com.gwtext.client.dd.DropTargetConfig;
import com.gwtext.client.widgets.Button;
import com.gwtext.client.widgets.MessageBox;
import com.gwtext.client.widgets.Panel;
import com.gwtext.client.widgets.Viewport;
import com.gwtext.client.widgets.event.ButtonListenerAdapter;
import com.gwtext.client.widgets.layout.BorderLayout;
import com.gwtext.client.widgets.layout.BorderLayoutData;
import com.gwtext.client.widgets.layout.VerticalLayout;

public class Pruebas implements EntryPoint {
    private Workflow workflow;

    public void onModuleLoad() {
        Panel borderPanel = new Panel();
        borderPanel.setLayout(new BorderLayout());

        Panel leftPanel = new Panel("menu");
        leftPanel.setCollapsible(true);
        leftPanel.setWidth(200);

        final Panel centerPanel = new Panel("principal");
        centerPanel.setWidth(800);
        centerPanel.setHeight(600);
        
        final Panel miPanel = new Panel();
        miPanel.setWidth(800);
        miPanel.setHeight(600);

        centerPanel.add(miPanel);
        
        leftPanel.setLayout(new VerticalLayout(10));
        
        Button dale = new Button("Dale", new ButtonListenerAdapter() {
            public void onClick(Button button, EventObject e) {
                createStartImage(200, 100);
            }
        });
        
        leftPanel.add(dale);
        
        leftPanel.add(new Button("Imagen resizable", new ButtonListenerAdapter() {
            public void onClick(Button button, EventObject e) {
                ImageFigure figure = new ImageFigure("Image.gif");
                figure.setDimension(150, 300);
                workflow.addFigure(figure, 10, 10);
            }
        }));

        leftPanel.add(new Button("Anotacion", new ButtonListenerAdapter() {
            public void onClick(Button button, EventObject e) {
                Annotation annotation = new Annotation("Hola, esto es un texto en una anotiacion");
                annotation.setDimension(100, 50);
                workflow.addFigure(annotation, 20, 20);
            }
        }));
        
        borderPanel.add(leftPanel, new BorderLayoutData(RegionPosition.WEST));
        borderPanel.add(centerPanel,
                new BorderLayoutData(RegionPosition.CENTER));

        workflow = new Workflow(miPanel.getId());

        DragSourceConfig dsc = new DragSourceConfig();
        dsc.setdDdGroup("wfx");
        new DragSource(dale, dsc);

        DropTargetConfig dtc = new DropTargetConfig();
        dtc.setdDdGroup("wfx");
        new DropTarget(miPanel, dtc) {
            public boolean notifyDrop(DragSource source, EventObject e,
                    DragData data) {
                createStartImage(e.getXY()[0] - workflow.getAbsoluteX(), e
                        .getXY()[1]
                        - workflow.getAbsoluteY());
                return true;
            }
            public String notifyOver(DragSource source, EventObject e,
                    DragData data) {
                return "x-dd-drop-ok";
            }
        };
        
        
        
        new Viewport(borderPanel);
    }
    
    private void createStartImage(int x, int y) {
        final MenuBuilder menuBuilder = new MenuBuilder() {
            public Menu buildMenu() {
                Menu menu = new Menu();
                
                MenuItemCallback cbk = new MenuItemCallback(){
                    public void onSelect(MenuItem menuItem) {
                        MessageBox.alert("Se selecciono la opcion "+ menuItem.getLabel());
                    }
                };

                MenuItem item1 = new MenuItem("Opcion 1", null, cbk);
                MenuItem item2 = new MenuItem("Opcion 2", null, cbk);
                
                menu.appendMenuItem(item1);
                menu.appendMenuItem(item2);
                
                return menu;
            }
        };
        
        ImageFigure figure = new ImageFigure("Start.png");
        figure.setDimension(50, 50);
        figure.setWorkflow(workflow);
        figure.setMenuBuilder(menuBuilder);

        OutputPort outputPort = new OutputPort();
        outputPort.setBackgroundColor(new Color(245, 115, 115));
        figure.addPort(outputPort, 50, 25);
        
        /*
         * By default, a connection is created, so, listeners must be
         * removed. Test uncommenting the following line and the next
         * listener (the effect should be the same)
         */
        outputPort.removeListeners();
        
        outputPort.addListener(new PortListener() {
            public void onDrop(Port source, Port target) {
                CommandConnect command = new CommandConnect(workflow, source, target);
                
                Connection connection = new Connection();
                connection.setMenuBuilder(menuBuilder);
                connection.setLineWidth(5);
                
                command.setConnection(connection);
                
                workflow.getCommandStack().execute(command);
            }
        });

        InputPort inputPort = new InputPort();
        inputPort.setBackgroundColor(new Color(115,115,245));
        figure.addPort(inputPort, 0, 25);
        

        workflow.addFigure(figure, x, y);
    }

}
```
## com/pru/public/Pruebas.html ##
```
<html>
	<head>
		<title>Wrapper HTML for Pruebas</title>
		<meta http-equiv="pragma" content="no-cache"/>
	</head>
	<body>


		<!-- OPTIONAL: include this if you want history support -->
		<iframe src="javascript:''" id="__gwt_historyFrame" style="width:0;height:0;border:0"></iframe>

		<!--include Draw2d files-->
		<SCRIPT src="draw2d/wz_jsgraphics.js"></SCRIPT>
		<SCRIPT src="draw2d/mootools.js"></SCRIPT>
		<SCRIPT src="draw2d/moocanvas.js"></SCRIPT>
		<SCRIPT src="draw2d/draw2d.js"></SCRIPT>

		<!--include the Ext Core API-->
		<script type="text/javascript" src="js/ext/adapter/ext/ext-base.js"></script>

		<!--include Ext -->
		<script type="text/javascript" src="js/ext/ext-all.js"></script>

   		<script type="text/javascript" language="javascript" src="com.pru.Pruebas.nocache.js"></script>
   		
	</body>
</html>
```